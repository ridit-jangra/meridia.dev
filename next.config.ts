import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  devIndicators: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.dribbble.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
};

export default withMDX(nextConfig);
