import {useContext, useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BtnFull} from './styled.DeckSessionScreen';
import {UserContext} from '../../../context/UserContext';
import {getDeck, getUser} from '../../../api/api';
import CardFront from '../../../components/Card/CardFront';
import Loading from '../../../utils/Loading';
import {
  DeckShape,
  CardShape,
  UserShape,
  DeckSessionProps,
} from '../../../utils/globalTypes';

// Interfaces

interface ICardScores {
  cardId: string;
  score: number;
}

const DeckSessionScreen = ({navigation, route}: DeckSessionProps) => {
  const {user} = useContext(UserContext);
  const {deckId} = route.params;

  const [userData, setUserData] = useState<UserShape>();
  const [currentCard, setCurrentCard] = useState(0);
  const [cardState, setCardState] = useState('new');
  const [cardQuestions, setCardQuestions] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [cardScores, setCardScores] = useState([] as ICardScores[]);
  const [bestPossibleScore, setBestPossibleScore] = useState(0);
  const [shuffledDeck, setShuffledDeck] = useState({} as DeckShape);
  const [newCardsDeck, setNewCardsDeck] = useState([] as CardShape[]);

  const numOfOptions = 5;

  /*
   * HELPER FUNCTIONS GO HERE
   */

  const buildNewCardsSequence = (deck: DeckShape) => {
    const userSeenCards = {} as any;
    if (userData) {
      userData.cards?.map(card => (userSeenCards[`${card.cardId._id}`] = true));
    }
    let newCards: Array<CardShape> = [];
    deck.cards.forEach(card => {
      if (!userSeenCards[`${card._id}`]) {
        newCards.push(card);
      }
    });
    if (newCards.length > 0) setNewCardsDeck(newCards);
    else setCardState('front');
  };

  // TODO: Review & Tidy up
  const shuffleDeck = (deck: DeckShape) => {
    const shuffledCards = deck.cards.sort(() => 0.5 - Math.random());
    const newDeck = {...deck};
    newDeck.cards = shuffledCards;
    newDeck.name = deck.name;
    setShuffledDeck(newDeck);
    buildNewCardsSequence(newDeck);
    generateQuestions(0, newDeck);
  };

  // create an array of possible answers for each card - one correct, the rest (determined by numOfOptions) false
  const generateQuestions = (currentCard: number, deck: DeckShape) => {
    // Answer options for card meanings
    const correctMeaning = deck.cards[currentCard].wordMeanings;
    const possibleMeanings = deck.cards
      .filter(card => card._id !== deck.cards[currentCard]._id)
      .map(card => card.wordMeanings)
      .slice(0, numOfOptions - 1);
    possibleMeanings.push(correctMeaning);
    const shuffledMeanings = [...possibleMeanings].sort(
      () => 0.5 - Math.random(),
    );

    // Answer options for hiragana

    setCardQuestions({meanings: shuffledMeanings, correctMeaning});
  };

  const moveToNextCard = () => {
    if (cardState === 'new') {
      if (!(currentCard + 1 >= newCardsDeck.length)) {
        setCurrentCard(currentCard + 1);
      } else {
        setCurrentCard(0);
        setCardState('front');
      }
    } else {
      if (!(currentCard + 1 >= shuffledDeck.cards.length)) {
        setCurrentCard(currentCard + 1);
        setCardState('front');
        generateQuestions(currentCard + 1, shuffledDeck);
      } else {
        setCurrentCard(currentCard + 1);
      }
    }
  };

  const showCardBack = () => {
    setCardState('back');
  };

  const trackScore = (score: number, cardId: string) => {
    // each card can give you (numOfOptions - 1) points, one point is deducted each time you guess incorrectly
    const cardScoreObject = {cardId, score};
    setCardScores([...cardScores, cardScoreObject]);
    setTotalScore(totalScore + score);
  };

  /*
   * USE EFFECTS GO HERE
   */

  useEffect(() => {
    (async () => {
      if (user && typeof user._id !== 'undefined') {
        const userResponse = await getUser(user._id);
        setUserData(userResponse.data);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (userData) {
        const response = await getDeck(deckId);
        setBestPossibleScore(response.data.cards.length * (numOfOptions - 1));
        shuffleDeck(response.data);
      }
    })();
  }, [userData]);

  /*
   * JSX GOES HERE
   */

  if (!shuffledDeck.cards) return <Loading />;

  return (
    <View>
      <Text>Deck</Text>
      <CardFront
        id={shuffledDeck.cards[currentCard]._id!}
        card={shuffledDeck.cards[currentCard]}
        showCardBack={showCardBack}
        cardQuestions={cardQuestions}
        numOfOptions={numOfOptions}
        trackScore={trackScore}
      />
      <BtnFull
        title="go back"
        onPress={() => navigation.navigate('BottomTabs')}
      />
    </View>
  );
};

export default DeckSessionScreen;
