import * as React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';

const backgroundImg = require('../../assets/img/sakura-hero.jpg');
// interface HomeScreenProps {}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImg}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <Text>HomeScreen</Text>
      </ImageBackground>
      <Image
        style={}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
