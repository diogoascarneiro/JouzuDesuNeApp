import {UserContext} from '../../context/UserContext';
import {useContext, useEffect, useState} from 'react';
import {
  getUser,
  getUserDeckData,
  updateAllDeckCards,
  updateUserDeckData,
} from '../../api/api';
import Loading from '../../utils/Loading';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BtnFull} from '../UI/Buttons';
import {P} from '../UI/Text';
import {ICardScores} from '../../utils/globalTypes';
import {useNavigation} from '@react-navigation/native';

interface IDeckCompleteProps {
  totalScore: number;
  bestPossibleScore: number;
  cardScores: ICardScores[];
}

const DeckComplete = ({
  totalScore,
  bestPossibleScore,
  cardScores,
}: IDeckCompleteProps) => {
  const {navigate} = useNavigation<any>();
  return (
    <SafeAreaView>
      <P>Ya did it</P>
      <BtnFull title="go back" onPress={() => navigate('BottomTabs')} />
    </SafeAreaView>
  );
};

export default DeckComplete;
