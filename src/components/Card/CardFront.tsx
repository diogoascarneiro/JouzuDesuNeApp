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
  trackScore: (score: number, cardId: string) => void;
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

  // TODO: refactor for native
  // const handleAnswer = (e) => {
  //   if (e.target.innerText.toLowerCase() !== cardQuestions.correctMeaning.toLowerCase()) {
  //     e.target.style.visibility = "hidden";
  //     setCardScore(cardScore - 1);
  //   }
  //   if (e.target.innerText.toLowerCase() === cardQuestions.correctMeaning.toLowerCase()) {
  //     showCardBack();
  //     trackScore(cardScore, id);
  //   }
  // };

  if (!card || !cardQuestions?.meanings?.length) return <Loading />;
  console.log('cardQuestions', cardQuestions);
  return (
    <Wrapper>
      <Background source={defaultBG} resizeMode="cover">
        <InnerContainer>
          <P>{card.questionWord}</P>
          {cardQuestions.meanings.map((question: string, i: number) => (
            <Btn
              title={question}
              key={`${question}${i}`}
              onPress={() => showCardBack()}
            />
          ))}
        </InnerContainer>
      </Background>
    </Wrapper>
  );
};

export default CardFront;
