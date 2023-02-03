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
import {ICardScores, UserShape} from '../../utils/globalTypes';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

interface IDeckCompleteProps {
  deckId: string;
  totalScore: number;
  bestPossibleScore: number;
  cardScores: ICardScores[];
}

const DeckComplete = ({
  deckId,
  totalScore,
  bestPossibleScore,
  cardScores,
}: IDeckCompleteProps) => {
  const {user, setUser} = useContext(UserContext);
  const {navigate} = useNavigation<any>();

  const [fullyLoaded, setFullyLoaded] = useState(false);

  const winImage = () => {
    const winImages = [
      require('../../assets/img/thumbs-up1.gif'),
      require('../../assets/img/thumbs-up2.gif'),
      require('../../assets/img/thumbs-up3.gif'),
      require('../../assets/img/thumbs-up4.gif'),
      require('../../assets/img/thumbs-up5.gif'),
    ];
    return winImages[Math.floor(Math.random() * winImages.length)];
  };

  const deckUpdater = async () => {
    if (user) {
      const currentDeck = await getUserDeckData(user, deckId);
      //TODO: make interface for the below
      const deckData: any = {};
      deckData.deckId = deckId;
      if (!currentDeck.data) {
        deckData.timesPlayed = 1;
        deckData.highScore = totalScore;
        await updateUserDeckData(user, deckId, deckData);
      } else {
        deckData.timesPlayed = currentDeck.data.timesPlayed + 1;
        currentDeck.data.highScore > totalScore
          ? (deckData.highScore = currentDeck.data.highScore)
          : (deckData.highScore = totalScore);
        await updateUserDeckData(user, deckId, deckData);
      }
    }
  };

  const cardUpdater = async () => {
    if (user) await updateAllDeckCards(user, cardScores);
  };

  const updateUserContext = async () => {
    if (user?._id) {
      const response = await getUser(user._id);
      const updatedUserContext: UserShape = {...user};
      updatedUserContext.cards = response.data.cards;
      updatedUserContext.decks = response.data.decks;
      setUser(updatedUserContext);
    }
  };

  useEffect(() => {
    (async () => {
      if (deckId) await deckUpdater();
      await cardUpdater();
      await updateUserContext();
      setFullyLoaded(true);
    })();
  }, []);

  if (!fullyLoaded) return <Loading />;
  return (
    <SafeAreaView>
      <P>Ya did it</P>
      <Image source={winImage()} />
      <P>
        Your score: {totalScore}/{bestPossibleScore}
      </P>
      <BtnFull title="go back" onPress={() => navigate('BottomTabs')} />
    </SafeAreaView>
  );
};

export default DeckComplete;
