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
                        utilities: "./utilities",
                        colors: "./utilities/Colors.tsx",
                        state: "./state",
                        themes: "./utilities/themes",
                        contexts: "./utilities/contexts",
                        reducers: "./utilities/reducers",
                        functions: "./utilities/functions",
                        json: "./utilities/staticJson",
                        interfaces: "utilities/interfaces",
                        types: "utilities/types"
                    },
                    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
                }
            ]
        ]
  };
};
