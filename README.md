# NFCWristbandApp

INSTALLATION
---------------------------------------------------------------------------------------
Required:
- Nodejs 10.16.3
- JDK8
- Python2
- Android SDK tools

To easily install Nodejs, JDK and Python we will use chocolatey. A package manager for Windows.
Follow the installation instructions found here: https://chocolatey.org/install

Once chocolatey is installed, open a Command Prompt and run the following commands:
choco install -y python2 jdk8
choco install -y nodejs.install --version 10.16.3

To install Android SDK tools without installing Android Studio we use the following download link:
https://dl.google.com/android/repository/sdk-tools-windows-4333796.zip
Extract the contents of this zip file into C:\, and rename the folder to 'Android'.

Go to C:\Android\tools\bin, open a Command Prompt in this directory and run the following command:
sdkmanager

If the error “c:/users/xxx/.android/repositories.cfg could not be loaded.” comes up:
Simply create this file, it can be an empty text file.

After this, run the command: 
sdkmanager "platform-tools" "platforms;android-27" "build-tools;27.0.3"


SYSTEM ENVIRONMENT VARIABLES
---------------------------------------------------------------------------------------
Open the system environment variables window and do the following:
Add a new user variable by clicking 'New...', then enter the following data:
variable=ANDROID_SDK_ROOT
value=C:\Android

Next, open user variables -> Path
Add the following lines:
- C:\Android\tools                      -- Set to directory where Android SDK files were extracted
- C:\Android\platform-tools             -- Set to directory where Android SDK files were extracted
- C:\Program Files\Java\jdk1.8.0_231    -- Set to directory where JDK8 was installed, this is the default directory


CREATING THE PROJECT
---------------------------------------------------------------------------------------
Open up a Command Prompt, navigate to the directory you want to create the React Native project and run the following commands:
npm install -g react-native-cli           -- This installs the react-native command line option
react-native init <projectname>           -- This creates a new React Native project
cd <projectname>                          -- Navigate to the project directory
npm start                                 -- Installs the initial project packages and boots the application

Now connect an Android device to the computer through USB. Note that the device should be in developer mode: https://developer.android.com/studio/debug/dev-options
Open up a new Command Prompt and navigate to the project directory. Now run the following command to install and run the app on the device:
react-native run-android (in a new window)
