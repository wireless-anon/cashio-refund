/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: 'https://refund.cashio.app/',
        permanent: true,
        basePath: false,
      },
      {
        source: '/create',
        destination: 'https://refund.cashio.app/create',
        permanent: true,
        basePath: false,
      },
    ]
  },
}
