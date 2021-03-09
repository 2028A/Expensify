const path=require('path');

module.exports=(env)=>{
    //console.log('env',env);
    const isProduction=env.production;
    //console.log('env',isProduction);
    return {
    //entry:path.resolve(__dirname,'src')+'/app.js',
    entry:'./src/app.js',
    output: {
        path: path.join(__dirname, 'public','dist'),
        filename: 'bundle.js',
      },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },
        {   test:/\.s?css$/,
            use:['style-loader','css-loader','sass-loader']
            
        }]

    },
    devtool: isProduction ? 'source-map': "eval-cheap-module-source-map",
    devServer:{
        contentBase:path.join(__dirname,'public'),
        publicPath:'/dist/',
        port:8080,
        watchContentBase:true,
        historyApiFallback: true,
     
    }
}
};