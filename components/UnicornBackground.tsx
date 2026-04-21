"use client";

import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
  loading: () => null
});

export function UnicornBackground() {
  return (
    <div className="unicorn-background" aria-hidden="true">
      <UnicornScene
        projectId="k3JAUs5BqgzyUrcm9q5P"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.9/dist/unicornStudio.umd.js"
        width="100%"
        height="100%"
        scale={1}
        dpi={1.5}
        lazyLoad
        production
      />
    </div>
  );
}
