import * as React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';

import {BtnFull} from '../../components/UI/Buttons';
import {H1, H2, P} from '../../components/UI/Text';
// Image assets
const backgroundImg = require('../../assets/img/sakura-hero.jpg');
const logoMid = require('../../assets/logo/logo192.png');
//interface StartScreenProps {}

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <View style={styles.innerContainer}>
          <View style={styles.headingContainer}>
            <Image source={logoMid} style={styles.logoMid} />
            <H1>Jouzu desu ne!</H1>
          </View>
          <H2>Ready to learn some Japanese?</H2>
          <P>
            Jouzu desu ne! is an online flashcards app for learning Japanese
            words, based on the Anki Core 2k deck. The goal is to teach you the
            most essential words and Kanji in a fast and fun way.
          </P>
          <BtnFull title="Log in" />
          <BtnFull title="Sign up" />
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
    backgroundColor: 'rgba(255,255,255,0.5)',
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
