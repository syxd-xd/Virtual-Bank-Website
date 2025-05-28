const { override, addBabelPreset } = require('customize-cra');

module.exports = override(
    addBabelPreset('@babel/preset-react', { runtime: 'automatic' })
);

// ( CHANGED THE FOLLOWING FROM package.json file )
// "scripts": {
//     "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
//     "build": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"