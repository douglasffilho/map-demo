# map-demo

A map app demo

# Build process

- nvm install 14.17.6
- npm i -g yarn eslint prettier expo expo-cli jest
- expo init map-demo
- create git repository then relate it as remote repository with: `git remote add origin git@github.com:<username>/map-demo.git`
- `git add . && git commit -m "project first settings`
- add file .nvmrc with node version
- reopen terminal
- add name, version, description, repository, author and license to package.json
- yarn remove expo expo-status-bar react react-dom react-native-web
- yarn add -E expo expo-status-bar react react-dom react-native-web
- yarn remove @babel/core
- yarn add -E -D @babel/core
- remove web support from app.json and add platforms android and ios constraint
- add husky scripts folder
- add commitlint.config.js
- add clean script file and instruction on package.json
- add commitzen and lint-staged configs on package.json
- add husky install on prepare cicle on package.json scripts
- yarn add -E -D @commitlint/cli @commitlint/config-conventional git-cz lint-staged husky
- add lint script to package.json scripts
- add test folder and jest.config.js file on project root
- add .editorconfig .eslintignore .eslintrc.yml .prettierignore .prettierrc
- add simulate-android
- remove android script from package.json and add new android, simulate:android, build:android and apk scripts to package.json
- yarn add -E -D eslint eslint-config-prettier eslint-plugin-jest eslint-plugin-prettier eslint-plugin-react jest prettier @types/jest
- yarn clean && yarn && yarn lint
- `git add . && git commit -m "add: settings lint tests and build`
- after update project on git, run `yarn android` then start your emulator and play your project from Metro bundler
- you should run your app by hitting `Run on Android device/emulator`
- To run on IOS, you may read [this](https://docs.expo.dev/workflow/ios-simulator/)
