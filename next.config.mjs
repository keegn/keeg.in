/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
     * The following items speed up builds and move typechecking to github actions. - see the workflows ci.yml 
     * must comment the below `i18n` config out.
     *
     /** */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
}

export default nextConfig
