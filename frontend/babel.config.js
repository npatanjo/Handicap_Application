module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: 
        [
            [
                'module-resolver',
                {
                    alias: {
                        components: "./components",
                        screens: "./screens",
                        assets: "./assets",
                        utilities: "./utilities",
                        colors: "./utilities/Colors.tsx",
                        state: "./state",
                        contexts: "./utilities/contexts",
                        reducers: "./utilities/reducers",
                    },
                    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
                }
            ]
        ]
  };
};
