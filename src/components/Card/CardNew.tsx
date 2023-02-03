import {useEffect, useState} from 'react';
import {Wrapper, Background, InnerContainer, P, Btn, H1} from './styled.Card';
import Loading from '../../utils/Loading';
import {CardShape} from '../../utils/globalTypes';
import {capitalizeMeanings} from './helpers.Card';

// TODO: implement Furigana properly

//interface DeckProps {}
// Temporary testing while api is not updated
const defaultBG = require('../../assets/img/decks/default.jpg');

interface CardNewProps {
  card: CardShape;
  moveToNextCard: () => void;
}

const CardNew = ({card, moveToNextCard}: CardNewProps) => {
  const [meaningCapitalized, setMeaningCapitalized] = useState('');

  useEffect(() => {
    if (card) setMeaningCapitalized(capitalizeMeanings(card));
  }, []);

  if (!card) return <Loading />;

  const {
    questionWord,
    wordInKana,
    wordAudio,
    exampleSentence,
    exampleWithFurigana,
    exampleTranslation,
    exampleAudio,
  } = card;

  return (
    <Wrapper>
      <Background source={defaultBG} resizeMode="cover">
        <InnerContainer>
          <H1>New card!</H1>
          <H1>{questionWord}</H1>
          <P>Furigana: {wordInKana}</P>
          <P>{meaningCapitalized}</P>
          <P>Example sentence:</P>
          <P>{exampleSentence}</P>
          <P>Example with Furigana:</P>
          <P>{exampleWithFurigana}</P>
          <P>{exampleTranslation}</P>
          <Btn title="Next card" onPress={() => moveToNextCard()} />
        </InnerContainer>
      </Background>
    </Wrapper>
  );
};

export default CardNew;
