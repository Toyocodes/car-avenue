/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    //to ignore erorrs that occur during build
    typescript:{
        ignoreBuildErrors:true,
    }
}

module.exports = nextConfig
