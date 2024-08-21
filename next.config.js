module.exports = {
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|mov)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: `/_next/static/media/`,
              outputPath: `${isServer ? '../' : ''}static/media/`,
              name: '[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      });
  
      return config;
    },
  };
  