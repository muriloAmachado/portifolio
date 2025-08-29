import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const remotePatterns: RemotePattern[] = [
  {
    protocol: "https",
    hostname: "avatars.githubusercontent.com",
    pathname: "/**",
  },
  {
    protocol: "https",
    hostname: "github.com",
    pathname: "/**",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
};

export default withNextIntl(nextConfig);