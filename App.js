import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import LoadingScreen from 'src/screens/loadingScreen.js';
import HomeScreen from 'src/screens/homeScreen';
import LoginScreen from 'src/screens/loginScreen';
import RegisterScreen from 'src/screens/registerScreen';

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCzt2EgpNkX1kXh9SDEkNTYUqxRC9w8OeE",
  authDomain: "sospet-bfd63.firebaseapp.com",
  databaseURL: "https://sospet-bfd63.firebaseio.com",
  projectId: "sospet-bfd63",
  storageBucket: "sospet-bfd63.appspot.com",
  messagingSenderId: "877194785349",
  appId: "1:877194785349:web:e42151663003d57c95a92c",
  measurementId: "G-CWYH066YP2"
};
firebase.initializeApp(firebaseConfig);
const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator({
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)
