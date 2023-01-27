import {useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {StartProps} from '../../utils/globalTypes';
import {LogoM, H1, H3, Container, P, BtnFull} from './styled.StartScreen';
import {UserContext} from '../../context/UserContext';

// Image assets
const backgroundImg = require('../../assets/img/sakura-hero.jpg');

// TODO: Finish converting normal styles to styled components

const StartScreen = ({navigation}: StartProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <View style={styles.innerContainer}>
          <LogoM size={120} />
          <H1 align="center">Jouzu desu ne!</H1>
          <Container padded>
            <H3 align="center">Ready to learn some Japanese?</H3>
            <P>
              Jouzu desu ne! is an online flashcards app for learning Japanese
              words, based on the Anki Core 2k deck. The goal is to teach you
              the most essential words and Kanji in a fast and fun way.
            </P>
            <BtnFull
              title="Log in"
              onPress={() => navigation.navigate('Login')}
            />
            <BtnFull
              title="Sign up"
              onPress={() => navigation.navigate('Signup')}
            />
          </Container>
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
