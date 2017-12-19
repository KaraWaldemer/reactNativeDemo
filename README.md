# React Native Demo Project


  1. [Getting Started](#getting-started)
      1. [React Native CLI](#react-native-cli)
      2. [Setting up iOS](#setting-up-ios)
      3. [Setting up Android](#setting-up-android)
      4. [Reloading & Debugging](#reload-debugging)
  2. [The Code](#the-code)
      1. [Redux](#redux)
      2. [Navigation](#navigation)
      3. [Components](#components)
      4. [Styling](#styling)
      5. [Using Native Hardware](#native-hardware)
      6. [Using Native Code](#native-code)
      7. [Testing](#testing)


## <a id="getting-started"></a>Getting Started

React Native requires that you have Node and NPM installed and configured. This guide will assume that you have already completed that step and have a basic understanding of both Node and React. If you need a refresher, please check out the documentation for [Node](https://nodejs.org/en/) and [React](https://reactjs.org/). For a presentation on the basics of React Native, please go [here](https://thegingertechie.com/reactNativeDemo).

#### <a id="react-native-cli"></a>React Native CLI

React Native is a node module that can be installed with NPM like any other. If you choose to go that route, you will have to configure everything for your project yourself which will require a thorough understanding of Node, iOS, and Android project configuration. If you already have this knowledge, you will be able to set up the project exactly how you see fit. However, if you would rather let a tool handle that initial setup for you, then there is the [React Native CLI](https://www.npmjs.com/package/react-native-cli). There are other tools for creating new React Native projects, but for the purposes of this demo, we will be using React Native CLI.

React Native CLI comes bundled with React Native or you can install it on it's own using:

    $ npm i -g react-native-cli

This now global version of the cli provides you with commands to create new React Native projects. It also ties into the local cli versions inside React Native projects and give you shortcuts for many of the basic tasks you will need to do. These include:

    $ react-native init <ProjectName> [options]
    $ react-native run-ios [options]
    $ react-native run-android
    $ react-native log-ios
    $ react-native log-android
    $ react-native bundle [options]

Behind the scenes, these commands are doing a number of different things. We will cover some of them later, but more detail can be found in React Native's documentation.


#### <a id="setting-up-ios"></a>Setting Up iOS

A potential downside to developing iOS mobile applications, whether natively or with React Native, is that you have to be running OSX to do it. It is a hard requirement that you be working on a device (or VM) running OSX which has Xcode installed and configured. Once that is done, it should be as easy as typing `react-native run-ios` to run your application on the iOS simulator. This will run your code on the default simulator. In order to run on a specific simulated device, you can add the `--simulator="<deviceName>"` option to your run ios command. The device name has to match that of a device available in Xcode. Run `xcrun simctl list devices` in the console to list the available devices.

Occasionally, your project may not be able to find Xcode by default. If that is the case, run `sudo xcode-select -s /Applications/Xcode.app` and your problem should be fixed.

#### <a id="setting-up-android"></a>Setting Up Android

Setting your machine up to run your project on Android could take a bit of work. If you have never done any Android development and are installing everything fresh, you will have to do some configuration that installing Xcode seems to handle for you on the iOS side.

Android projects are written using the [Java JDK](https://java.com/en/), dependencies are handled with [Yarn](https://yarnpkg.com/en/), and the project is built with [Gradle](https://gradle.org/). You will need to make sure that each of these are installed and up to date before continuing. Next you will have to install and configure the latest version of [Android Studio](https://developer.android.com/studio/index.html).

The Android SDK is installed with Android Studio but you will want to make sure it is fully updated before continuing. At the time of writing this, the Android SDK version that is required is 23 but this might change. Refer to the React Native [documentation](https://facebook.github.io/react-native/docs/android-building-from-source.html) for the most up to date version. If this is not already installed and configured, you will have do do so yourself. You can do this through Android Studio's GUI by navigating in the preferences to `Appearance & Behavior > System Settings > Android SDK` and installing the appropriate platform and tools.

After the appropriate SDK is installed, you will also have to create an emulator to run your project on. To do this you will need to navigate to the Android Virtual Device Manager and create a new Virtual Device. Configure it with the settings you need, save it, and you are good to go.

Unlike when running iOS, React Native does not allow you to choose the emulator you would like to run from the command line and does not start one for you. Instead, you will have to choose and manually start the emulator you want before running the project. Once the emulator is running, simply enter `react-native run-android` and watch it go.

#### <a id="reload-debugging"></a>Reloading & Debugging

Once you have the code running in the iOS simulator or the Android emulator, the real fun can begin. One of the biggest benefits to using React Native is its Hot Reloading ability. If you have ever done mobile development before, you have probably faced the immense irritation of waiting for your project to recompile before you can test the changes you just made. React Native fixes this issue by allowing you to reload the project and immediately see the changes like in the web. Even if there were no other benefits to using React Native, this would be a selling point. By press `cmd r` in the iOS simulator or typing `rr` in the Android emulator, your project will immediately reload taking any new changes to the JavaScript code. Of course, if you make changes to any of the native code or configuration you will have to recompile the whole project but Hot Reloading is a life saver the majority of the time.

React Native also provides convenient tools for debugging your application as you are running it. Since we are writing JavaScript, React Native provides a remote debugger that will let you inspect your code, place break points, and watch console output from your preferred browser. Simply press `cmd d` in the iOS simulator or `cmd m` in the Android emulator. This will bring up the developer menu where you can select `Enable Remote Debugging`. Your app will then reload and the remote debugging window will appear. You can turn off remote debugging by following the same commands as above and selecting `Disable Remote Debugging`. If you need to debug native code, you will have to fall back on the debugging capabilities in Xcode and Android Studio.

## <a id="getting-started"></a>Getting Started with React Native

#### <a id="redux"></a>Redux
#### <a id="navigation"></a>Navigation
#### <a id="components"></a>Components
#### <a id="styling"></a>Styling
#### <a id="native-hardware"></a>Using Native Hardware
#### <a id="native-code"></a>Native Code
#### <a id="testing"></a>Testing
