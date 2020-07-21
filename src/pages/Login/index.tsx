import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-google-app-auth';

const Login = () => {
  const navigation = useNavigation();

  //Google Login
  const googleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '796792477593-85tejclpkvcavf6q3sv8eb319mdcaobo.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        navigation.navigate('Phrases');
        return result.accessToken;
      } else {
        // return { cancelled: true };
        return alert('Erro de acesso');
        // return console.log("cancel");        
      }
    } catch (e) {
      // return { error: true };
      return alert('login: Error:' + e);
    }
  }

  //Page Navigation
  function handleNavigateToPhrases() {
    navigation.navigate('Phrases');
  }

  //Google Login
  function handleGoogleLogin() {
    googleLogin();
  }

  return (
    <ImageBackground
      source={require('../../assets/BacgroundFlower.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')}
          style={{ width: '80%', height: '80%', resizeMode: "contain" }}
        />
      </View>

      <View style={styles.footerLogin}>
        <TouchableOpacity style={styles.socialButton} onPress={handleNavigateToPhrases}>
          <Text style={styles.btSocialText}>Pensamento do dia</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  footerLogin: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 100,
  },

  socialButton: {
    height: 58,
    width: "80%",
    // flexDirection: "row",
    borderRadius: 4,
    alignItems: "center",
    marginTop: 32,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#0002",
    borderWidth: 1,
    borderColor: '#eee',
  },

  btSocialText: {
    color: "#FFF",
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    // paddingLeft: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  backgroundImage: {
    flex: 1,
    width: '100%'
  }

});

export default Login;