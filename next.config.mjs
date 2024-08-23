/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https', 
                hostname:'www.pexal.com' //add host name
            }
        ]
    }
};

export default nextConfig;
