import * as React from 'react';
import {View, StyleSheet, ImageBackground, Text, Image} from 'react-native';

import {RoundedBtn} from '../../components/UI/Buttons';
// Image assets
const backgroundImg = require('../../assets/img/sakura-hero.jpg');
const logoMid = require('../../assets/logo/logo192.png');
//interface StartScreenProps {}

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <View style={styles.innerContainer}>
          <View style={styles.headingContainer}>
            <Image source={logoMid} style={styles.logoMid} />
            <Text>Jouzu desu ne!</Text>
          </View>
          <Text>Ready to learn some Japanese?</Text>
          <Text>
            Jouzu desu ne! is an online flashcards app for learning Japanese
            words, based on the Anki Core 2k deck. The goal is to teach you the
            most essential words and Kanji in a fast and fun way.
          </Text>
          <RoundedBtn title="Log in" />
          <RoundedBtn title="Sign up" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  logoMid: {
    height: 120,
    width: 120,
  },
});
