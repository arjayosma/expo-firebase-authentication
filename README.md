# Sample Firebase Authentication Application

This is a sample Expo (React Native) Firebase Authentication application.

## Prerequisites

Make sure you have Expo installed.

`npm install --global expo-cli`

## Installation

Install all packages using

`npm install`

or

`yarn install`

## Usage

For those who have access to the Firebase console. Copy the configuration from there:

```javascript
const firebaseConfig = {
  apiKey: 'AIXXX',
  authDomain: 'XXX-test.firebaseapp.com',
  databaseURL: 'https://XXX-test.firebaseio.com',
  projectId: 'XXX-test',
  storageBucket: 'XXX-test.appspot.com',
  messagingSenderId: '000000',
  appId: '1:XXX:web:XXX',
  measurementId: 'G-XXXX'
};
```

In this project, paste the configuration inside `src/config/firebase.js`;

## Starting the Application

Just execute the `expo start` command.
