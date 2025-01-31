This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Vocaverse - Learn Languages with Technology

Vocaverse is a language-learning app built with **React Native**. It integrates various features to help users learn languages in an interactive way.

## Features
- 📢 **Social Media-Style Posting System** – Share and engage with language-related content.
- 🤖 **AI Chatbot** – Practice informal conversations using the Google Gemini API.
- 🎮 **Gamified Learning** – Learn new words and phrases through interactive games.
- 🎥 **YouTube Video Integration** – Watch and listen to videos for better comprehension.

## Technologies Used
- **React Native** – For cross-platform mobile app development.
- **Firebase** – Used for database services.
- **Google Gemini API** – Powers the AI chatbot.

## Installation

Follow these steps to run the app locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/vocaverse.git
   cd vocaverse
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npx react-native start
   ```
4. Run the app on Android:
   ```sh
   npx react-native run-android
   ```

# System Architecture

Sequence diagrams show the flow of interactions between users and the Vocaverse platform for specific scenarios.

![Sequence Diagram](https://github.com/alrayhan587/VocaVerse-Language-Learning-app/blob/main/Images/final%20sequence%20diagram.jpg?raw=true)

# How to run 

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:



### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## Contribution
Feel free to contribute! If you find any issues or want to add features, open a pull request or create an issue.

## License
This project is licensed under the MIT License.

---

🚀 Happy Learning with **Vocaverse**!

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
