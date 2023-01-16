import React from 'react';
//import styled from 'styled-components/native';
import {View, Image} from 'react-native';

const logoXSmallImg = require('../../assets/logo/logo25.png');
const logoSmallImg = require('../../assets/logo/logo51.png');
const logoMidImg = require('../../assets/logo/logo192.png');
const logoLargeImg = require('../../assets/logo/logo512.png');

export const LogoXS = ({size = 25}: {size?: number}) => {
  return (
    <View>
      <Image source={logoXSmallImg} style={{height: size, width: size}} />
    </View>
  );
};

export const LogoS = ({size = 51}: {size?: number}) => {
  return (
    <View>
      <Image source={logoSmallImg} style={{height: size, width: size}} />
    </View>
  );
};

export const LogoM = ({size = 192}: {size?: number}) => {
  return (
    <View>
      <Image source={logoMidImg} style={{height: size, width: size}} />
    </View>
  );
};

export const LogoL = ({size = 512}: {size?: number}) => {
  return (
    <View>
      <Image source={logoLargeImg} style={{height: size, width: size}} />
    </View>
  );
};
