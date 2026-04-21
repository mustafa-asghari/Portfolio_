"use client";

import dynamic from "next/dynamic";
import { useState, useSyncExternalStore } from "react";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
  loading: () => null
});

const HERO_UNICORN_PROJECT_ID = "6HLD9lRgbiClnJh2Z00Q";
const DARK_UNICORN_SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.9/dist/unicornStudio.umd.js";
const LIGHT_UNICORN_SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.9/dist/unicornStudio.umd.js";
const BLOCKED_ATTRIBUTION_URLS = ["made_in_us_small_web.svg", "free_user_logo.png"];
const ATTRIBUTION_BLOCKER_VERSION = BLOCKED_ATTRIBUTION_URLS.join("|");
const EMPTY_SVG_DATA_URI = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E";
type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);

  observer.observe(document.documentElement, {
    attributeFilter: ["data-theme"],
    attributes: true
  });

  return () => observer.disconnect();
}

function shouldBlockAttributionRequest(value: unknown) {
  const url =
    typeof value === "string"
      ? value
      : value instanceof URL
        ? value.href
        : value instanceof Request
          ? value.url
          : "";

  return BLOCKED_ATTRIBUTION_URLS.some((blockedUrl) => url.includes(blockedUrl));
}

function sanitizeAttributionUrl(value: string) {
  return shouldBlockAttributionRequest(value) ? EMPTY_SVG_DATA_URI : value;
}

function installUnicornAttributionBlocker() {
  if (typeof window === "undefined") {
    return;
  }

  const guardedWindow = window as Window & {
    __unicornAttributionBlockerVersion?: string;
  };

  if (guardedWindow.__unicornAttributionBlockerVersion === ATTRIBUTION_BLOCKER_VERSION) {
    return;
  }

  guardedWindow.__unicornAttributionBlockerVersion = ATTRIBUTION_BLOCKER_VERSION;

  const imagePrototype = window.HTMLImageElement?.prototype;
  const xhrPrototype = window.XMLHttpRequest?.prototype;
  const srcDescriptor = Object.getOwnPropertyDescriptor(imagePrototype, "src");

  if (srcDescriptor?.get && srcDescriptor.set) {
    Object.defineProperty(imagePrototype, "src", {
      configurable: true,
      enumerable: srcDescriptor.enumerable,
      get(this: HTMLImageElement) {
        return srcDescriptor.get?.call(this);
      },
      set(this: HTMLImageElement, value: string) {
        srcDescriptor.set?.call(this, sanitizeAttributionUrl(value));
      }
    });
  }

  const originalSetAttribute = imagePrototype.setAttribute;
  imagePrototype.setAttribute = function setAttribute(name: string, value: string) {
    if (name.toLowerCase() === "src") {
      originalSetAttribute.call(this, name, sanitizeAttributionUrl(value));
      return;
    }

    originalSetAttribute.call(this, name, value);
  };

  const originalFetch = guardedWindow.fetch?.bind(guardedWindow);

  if (originalFetch) {
    guardedWindow.fetch = function fetch(input: RequestInfo | URL, init?: RequestInit) {
      if (shouldBlockAttributionRequest(input)) {
        return Promise.resolve(
          new Response(EMPTY_SVG_DATA_URI, {
            headers: { "content-type": "image/svg+xml" },
            status: 200
          })
        );
      }

      return originalFetch(input, init);
    };
  }

  if (xhrPrototype?.open) {
    const originalOpen = xhrPrototype.open as (
      method: string,
      url: string | URL,
      async: boolean,
      username?: string | null,
      password?: string | null
    ) => void;

    const openWithAttributionBlocker = function open(
      this: XMLHttpRequest,
      method: string,
      url: string | URL,
      async = true,
      username?: string | null,
      password?: string | null
    ) {
      const safeUrl = shouldBlockAttributionRequest(url) ? EMPTY_SVG_DATA_URI : url;

      return originalOpen.call(this, method, safeUrl, async, username, password);
    };

    xhrPrototype.open = openWithAttributionBlocker as XMLHttpRequest["open"];
  }
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
          projectId={HERO_UNICORN_PROJECT_ID}
          sdkUrl={DARK_UNICORN_SDK_URL}
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

export function HeroUnicornScene() {
  const [canRenderScene] = useState(() => {
    installUnicornAttributionBlocker();
    return true;
  });
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getCurrentTheme,
    getServerThemeSnapshot
  );

  const isLightMode = theme === "light";

  return (
    <div className="hero-unicorn-effect" data-scene-theme={theme} aria-hidden="true">
      {canRenderScene ? (
        <UnicornScene
          key={theme}
          projectId={HERO_UNICORN_PROJECT_ID}
          sdkUrl={isLightMode ? LIGHT_UNICORN_SDK_URL : DARK_UNICORN_SDK_URL}
          width={isLightMode ? "1440px" : "100%"}
          height={isLightMode ? "900px" : "400px"}
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
