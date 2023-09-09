/** @type {import('next').NextConfig} */
const withExportImages = require("next-export-optimize-images");

const nextConfig = withExportImages({
  reactStrictMode: true,
  // output: "export",
});

module.exports = nextConfig;
