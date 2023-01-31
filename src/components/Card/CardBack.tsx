import {useEffect, useState} from 'react';
import {Wrapper, Background, InnerContainer, P, Btn} from './styled.Card';
import Loading from '../../utils/Loading';
import {CardShape} from '../../utils/globalTypes';
import {capitalizeMeanings} from './helpers.Card';
//interface DeckProps {}
// Temporary testing while api is not updated
const defaultBG = require('../../assets/img/decks/default.jpg');

interface CardBackProps {
  card: CardShape;
  moveToNextCard: () => void;
}

const CardBack = ({card, moveToNextCard}: CardBackProps) => {
  const [meaningCapitalized, setMeaningCapitalized] = useState('');
  const congratulateCard = () => {
    let congratulations = [
      "That's right!",
      'You got it!',
      'You know your stuff!',
      "Yep, that's it!",
    ];
    return congratulations[Math.floor(Math.random() * congratulations.length)];
  };

  useEffect(() => {
    if (card) setMeaningCapitalized(capitalizeMeanings(card));
  }, []);

  if (!card) return <Loading />;

  return (
    <Wrapper>
      <Background source={defaultBG} resizeMode="cover">
        <InnerContainer>
          <P>ISCARDBACK!</P>
          <Btn title="Next card" onPress={() => moveToNextCard()} />
        </InnerContainer>
      </Background>
    </Wrapper>
  );
};

export default CardBack;
