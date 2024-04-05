/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        PROJECT_ID : process.env.PROJECT_ID
    },
};

export default nextConfig;
