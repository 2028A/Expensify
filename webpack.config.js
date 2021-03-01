const path=require('path');

module.exports={
    //entry:path.resolve(__dirname,'src')+'/app.js',
    entry:'./src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
      },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },
        {
            use:['style-loader','css-loader','sass-loader'],
            test:/\.s?css$/
        }]

    },
    devtool:"eval-cheap-module-source-map",
    devServer:{
        contentBase:path.join(__dirname,'public'),
        port:8080,
        watchContentBase:true,
        historyApiFallback: true,
     
    }
};