const { withAxiom } require('next-axiom');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

export default withAxiom(nextConfig);
