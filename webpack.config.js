module.exports = {
    mode: 'production',
    // devtool: false,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
};