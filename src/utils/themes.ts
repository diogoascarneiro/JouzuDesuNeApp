/* eslint-disable @typescript-eslint/no-unused-vars */
import {DefaultTheme} from 'styled-components/native';

// Basics
const black = '#000000';
const white = '#FFFFFF';

// Main color gradient
const americanPink = '#FC949C';
const puce = '#D382A4';
const deepAmethyst = '#A275A2';
const darkBlueGray = '#726992';
const purpleNavy = '#495A78';
const darkSlateGray = '#2F4858';

// Semantic Colors

// Success
const mantis = '#6DD15C';
// Info
const lightAzure = '60BAFF';
// Warning
const rajah = '#FCAE5F';
// Danger
const persianPink = '#FF82B8';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: americanPink,
    secondary: puce,
    tertiary: deepAmethyst,
    accent1: darkBlueGray,
    accent2: purpleNavy,
    accent3: darkSlateGray,
    light: white,
    dark: black,
    success: mantis,
    info: lightAzure,
    warning: rajah,
    danger: persianPink,
  },
};

export const darkTheme = {
  colors: {
    pink: '#FC949C',
    green: '#D0FC94',
    blue: '#94FCF4',
    purple: '#C094FC',
  },
};
