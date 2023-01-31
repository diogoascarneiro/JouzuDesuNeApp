import {useEffect, useState} from 'react';
import {Wrapper, Background, InnerContainer, P, Btn} from './styled.Card';
import Loading from '../../utils/Loading';
import {CardShape} from '../../utils/globalTypes';
//interface DeckProps {}
// Temporary testing while api is not updated
const defaultBG = require('../../assets/img/decks/default.jpg');

interface CardFrontProps {
  card: CardShape;
  id: string;
  showCardBack: () => void;
  trackScore: any; // todo: change
  cardQuestions: any; // todo: change
  numOfOptions: number;
}

const CardFront = ({
  card,
  id,
  showCardBack,
  trackScore,
  cardQuestions,
  numOfOptions,
}: CardFrontProps) => {
  const [cardScore, setCardScore] = useState(numOfOptions - 1);

  // useEffect(() => {
  //   if (numOfOptions) setCardScore(numOfOptions - 1);
  // }, [numOfOptions]);
  if (!card || !cardQuestions?.meanings?.length) return <Loading />;

  return (
    <Wrapper>
      <Background source={defaultBG} resizeMode="cover">
        <InnerContainer>
          <P>{card.questionWord}</P>
          <Btn title="testflip" onPress={() => console.log('flip')} />
        </InnerContainer>
      </Background>
    </Wrapper>
  );
};

export default CardFront;
