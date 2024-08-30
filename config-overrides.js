const path = require('path');

module.exports = {
  webpack: (config, env) => {
    config.resolve.fallback = {
      "crypto": require.resolve("crypto-browserify"),
      "path": require.resolve("path-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "http": require.resolve("stream-http"),
      "vm": require.resolve("vm-browserify"),
      "fs": false,
      "net": false,
      "async_hooks": false
    };

    return config;
  },
};
