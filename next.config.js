/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Important: return the modified config
//     return config
//   },
// }

module.exports = nextConfig

// next.config.js
// module.exports = {
//     webpack: (config, options) => {
//         config.module.rules.push({
//             test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
//             type: 'asset/resource',
//             generator: {
//                 filename: 'static/chunks/[path][name].[hash][ext]'
//             },
//         });

//         return config;
//     }
// };
