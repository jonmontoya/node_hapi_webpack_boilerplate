#!/bin/bash
node_modules/.bin/babel ./src/server --watch -d ./build &
node_modules/.bin/webpack-dev-server --config webpack.dev.js &
node_modules/.bin/node-dev --no-notify build/index.js
