import {useEffect, useState} from 'react';
import {Wrapper, Background, InnerContainer, P, Btn} from './styled.Card';
import Loading from '../../utils/Loading';
import {CardShape} from '../../utils/globalTypes';
import {capitalizeMeanings} from './helpers.Card';

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

  return (
    <Wrapper>
      <Background source={defaultBG} resizeMode="cover">
        <InnerContainer>
          <P>{card.questionWord}</P>
          <Btn title="Next card" onPress={() => moveToNextCard()} />
        </InnerContainer>
      </Background>
    </Wrapper>
  );
};

export default CardNew;
