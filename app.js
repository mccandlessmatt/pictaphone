require('babel-register')({
  ignore: /node_modules/, 
  presets: [require('babel-preset-es2015')]
});

require('./src/server/app');
