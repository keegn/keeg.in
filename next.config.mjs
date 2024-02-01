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
  redirects: async () => {
    return [
      {
        source: '/products',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: false,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
