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
                        screens: "./navigation/screens",
                        screenStacks: "./navigation/screen-stacks",
                        tabStacks: "./navigation/tab-stacks",
                        assets: "./assets",
                        utils: "./utils",
                        colors: "./utils/Colors.tsx",
                        state: "./state",
                        themes: "./utils/themes",
                        contexts: "./utils/contexts",
                        reducers: "./utils/reducers",
                        functions: "./utils/functions",
                        json: "./utils/staticJson",
                        interfaces: "utils/interfaces",
                        types: "utils/types"
                    },
                    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
                }
            ]
        ]
  };
};
