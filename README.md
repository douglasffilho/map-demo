# map-demo
A map app demo

# Build process
- nvm install 14.17.6
- npm i -g yarn eslint prettier expo expo-cli jest
- add file .nvmrc with node version
- reopen terminal
- add name, version, description, repository, author and license to package.json
- yarn remove expo expo-status-bar react react-dom react-native-web
- yarn add -E expo expo-status-bar react react-dom react-native-web
- yarn remove @babel/core
- yarn add -E -D @babel/core
- remove web support from app.json and add platforms android and ios constraint
