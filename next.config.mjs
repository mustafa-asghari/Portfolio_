const privateNetworkDevOrigins = [
  "localhost",
  "*.localhost",
  "127.*.*.*",
  "0.0.0.0",
  "::1",
  "10.*.*.*",
  "172.16.*.*",
  "172.17.*.*",
  "172.18.*.*",
  "172.19.*.*",
  "172.20.*.*",
  "172.21.*.*",
  "172.22.*.*",
  "172.23.*.*",
  "172.24.*.*",
  "172.25.*.*",
  "172.26.*.*",
  "172.27.*.*",
  "172.28.*.*",
  "172.29.*.*",
  "172.30.*.*",
  "172.31.*.*",
  "192.168.*.*",
  "169.254.*.*",
  "*.local"
];

const sameNetworkCorsHeaders = [
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "Access-Control-Allow-Methods", value: "GET, HEAD, OPTIONS" },
  {
    key: "Access-Control-Allow-Headers",
    value: "Content-Type, Authorization, X-Requested-With, Accept, Origin"
  },
  { key: "Access-Control-Allow-Private-Network", value: "true" },
  { key: "Cross-Origin-Resource-Policy", value: "cross-origin" }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: privateNetworkDevOrigins,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: sameNetworkCorsHeaders
      }
    ];
  }
};

export default nextConfig;
