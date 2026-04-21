"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
  loading: () => null
});

const BLOCKED_ATTRIBUTION_URL = "made_in_us_small_web.svg";
const EMPTY_SVG_DATA_URI = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E";

function installUnicornAttributionBlocker() {
  if (typeof window === "undefined") {
    return;
  }

  const guardedWindow = window as Window & {
    __unicornAttributionBlockerInstalled?: boolean;
  };

  if (guardedWindow.__unicornAttributionBlockerInstalled) {
    return;
  }

  guardedWindow.__unicornAttributionBlockerInstalled = true;

  const imagePrototype = window.HTMLImageElement?.prototype;
  const srcDescriptor = Object.getOwnPropertyDescriptor(imagePrototype, "src");

  if (srcDescriptor?.get && srcDescriptor.set) {
    Object.defineProperty(imagePrototype, "src", {
      configurable: true,
      enumerable: srcDescriptor.enumerable,
      get(this: HTMLImageElement) {
        return srcDescriptor.get?.call(this);
      },
      set(this: HTMLImageElement, value: string) {
        if (typeof value === "string" && value.includes(BLOCKED_ATTRIBUTION_URL)) {
          srcDescriptor.set?.call(this, EMPTY_SVG_DATA_URI);
          return;
        }

        srcDescriptor.set?.call(this, value);
      }
    });
  }

  const originalSetAttribute = imagePrototype.setAttribute;
  imagePrototype.setAttribute = function setAttribute(name: string, value: string) {
    if (name.toLowerCase() === "src" && value.includes(BLOCKED_ATTRIBUTION_URL)) {
      originalSetAttribute.call(this, name, EMPTY_SVG_DATA_URI);
      return;
    }

    originalSetAttribute.call(this, name, value);
  };
}

export function UnicornBackground() {
  const [canRenderScene] = useState(() => {
    installUnicornAttributionBlocker();
    return true;
  });

  return (
    <div className="unicorn-background" aria-hidden="true">
      {canRenderScene ? (
        <UnicornScene
          projectId="k3JAUs5BqgzyUrcm9q5P"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.9/dist/unicornStudio.umd.js"
          width="100vw"
          height="100vh"
          className="unicorn-scene"
          scale={1}
          dpi={1.5}
          lazyLoad={false}
          production
        />
      ) : null}
    </div>
  );
}
