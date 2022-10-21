# CodeceptJS Framework Case Study
## _Made using Gherkin,Appium_
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


![](https://img.shields.io/tokei/lines/github/barispe/CodeceptJS_Mobile_Automation) 
![](https://img.shields.io/github/repo-size/barispe/CodeceptJS_Mobile_Automation) 
![](https://img.shields.io/github/languages/code-size/barispe/CodeceptJS_Mobile_Automation)


## Features

- Cucumber Implemented 
- Screenshots on Failed Steps
- Allure Report

## Applications and Plugins
- `CodeceptJS` (last version) [install](https://codecept.io/)
- `NodeJs` (last version) [download](https://nodejs.org/pt-br/download/)
- `Visual Studio Code` (Last version) [download](https://code.visualstudio.com/download)
- `Android Studio` (last version) [download](https://developer.android.com/studio)
- `Allure` (last version) [install](https://docs.qameta.io/allure-report/#_installing_a_commandline)
- `Java` (1.8.0_351) [download](https://www.oracle.com/java/technologies/downloads/)

### Prerequisities
- Java
- NPM Node
- VSCode
- Android Studio with Android SDK and Emulator
- Create Virtual Device in Android Emulator
- Appium Server GUI
- Appium Inspector
    You can check if emulator is up via:
        ```
    adb devices
        ```
- $JAVA_HOME and $ANDROID_HOME paths should be right:
     ```
    export ANDROID_HOME=/Users/baris/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/emulator
    export JAVA_HOME=/usr/bin/java
- Default Environment for Appium:
    ```
      //Make sure to change apk path according to your apk PATH    
      app: '/Users/baris/Desktop/projects/codecept/apk/nennosPizza.apk',
      platform: 'Android',
      device: 'emulator-5554',
      protocol: "http",
      host: "127.0.0.1",
      port: 4723,
      path: "/wd/hub",
### Installation And Executing Tests
Clone Repo:
        ```
    git clone https://github.com/barispe/CodeceptJS_Mobile_Automation.git
        ```
        
Go to Project Directory
        ```
    cd CodeceptJS_Mobile_Automation
        ```
        
Install Dependencies
       ```
npm install
      ```

Codeceptjs and Puppeteer
        ```
npm install codeceptjs puppeteer --save-dev
        ```
        
 Allure
        ```
        npx codeceptjs run --plugins allure
        ```


Visual testing
        ```
        npm install codeceptjs-resemblehelper --save
        ```
        
Reports
        ```
npm install -g allure-commandline --save-dev
        ```
        
   To run all Cucumber tests:
    ```
    npx codeceptjs run --features
    ```
    
 Allure reports After Tests:
        ```
        allure serve reports
        ```
#### Happy Testing!
