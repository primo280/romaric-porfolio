/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Désactive le dossier app
  experimental: {
    appDir: false,
  },
  // Configuration pour le build
  generateBuildId: () => 'build',
};

export default nextConfig;
