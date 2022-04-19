![myloc](https://i.imgur.com/b9OUTrz.png)

<h1 align="center">
    <a>🌥 myloc </a>
</h1>

<div align="center">
    <img src="https://img.shields.io/static/v1?label=React-Native&message=v0.64.3&color=6D21B4&style=for-the-badge&logo=react" />
    <img src="https://img.shields.io/static/v1?label=Typescript&message=v4.6&color=2184B4&style=for-the-badge&logo=typescript" />
    <img src="https://img.shields.io/static/v1?label=Expo&message=v44&color=FFFFFF&style=for-the-badge&logo=expo" />
    <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=8ED500&style=for-the-badge" />
</div>


## 📲 Stack

- React Native
- Expo [Bare Workflow]
- Typescript
- Geolocation
- React Native SVG
- React Native Maps
- Lottie

## ✅ Tests

- Jest
- Detox
- Typescript

## 🚚 Api

- [Weather Api](https://openweathermap.org/api) - Public

## ✨ Features

- Fetch your weather stats from your location
- Show your position on map
- and more...

## ⚒️ Getting Started

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general.  [Download Yarn](https://yarnpkg.com/en/docs/install)

* **React Native CLI** is a package that contains tools and helpers for React Native projects in form of a command line tool.  [Download React Native CLI](https://facebook.github.io/react-native/docs/getting-started)

* **Expo CLI** is a command line app that is the main interface between a developer and Expo tools. [Download Expo CLI](https://docs.expo.io/get-started/installation/)

* **Android Studio** is a great tool to run an emulator and then start your app [Download Android Studio](https://developer.android.com/studio?hl=pt&gclsrc=aw.ds&gclid=CjwKCAjwxZqSBhAHEiwASr9n9NK0zwx9dzJa44UgId5IVUFLZJMylK5K4BxuiMDNafHyM1jJiJ1pvhoCfSMQAvD_BwE)

```
macOS users - you can use the Iphone Emulator provide by Xcode
```

## 🚀  Install and Run

⬇ Follow the steps below to download and run the project 

```
1. git clone https://github.com/YuriPerro/myloc.git
2. cd myloc
3. yarn or npm install
4. create a .env file on the root of project, and put your weather api key like '.env.example'
5. yarn start or npm start
```

## 🚦 Run tests

### unit tests

For unit tests just run ```yarn test``` and wait the results

### e2e tests

For automated tests, you need to generate build and run tests for the platform of you choice. First, install detox-cli here [Download Detox](https://wix.github.io/Detox/docs/introduction/getting-started)

#### 🍎 iOS

 **Before, change device type in the section 'ios.sim.debug' on the package.json file to your ios emulator name.**

- Generate build with ```detox build --configuration ios.sim.debug```
- Then, Run e2e tests with ```detox test -c ios.sim.debug```
  
#### 🤖 Android

 **Before, change device avdName in the section 'android.emu.debug' on the package.json file to your android emulator name.**

- Generate build with ```detox build --configuration android.emu.debug```
- Then, Run e2e tests with ```detox test -c android.emu.debug```

## 📦 APK

For Android users that prefer to see standalone app

- [Download apk](https://expo.dev/artifacts/eas/nku4oA5gZGRYWghuKL4hfM.apk)

## 📃 License

* Licensed for users and contributors under MIT license.

---
<p align="center">Developed with 🧡 by Yuri Baumgartner</p>
