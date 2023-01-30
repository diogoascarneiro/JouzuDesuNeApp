import {useState} from 'react';
import {ImageSourcePropType, TouchableWithoutFeedback} from 'react-native';
import {BtnFull} from '../UI/Buttons';
import {Wrapper, InnerContainer, TitleText, P} from './styled.Deck';

interface DeckProps {
  title: String;
  bgImg: ImageSourcePropType;
  difficulty: Number;
  description: String;
  numOfCards: Number;
}

const Deck = ({
  title,
  bgImg,
  difficulty,
  description,
  numOfCards,
}: DeckProps) => {
  const [isFrontSide, setIsFrontSide] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={() => setIsFrontSide(!isFrontSide)}>
      <Wrapper>
        <InnerContainer source={bgImg} resizeMode="cover">
          {isFrontSide && <TitleText>{title}</TitleText>}
          {!isFrontSide && (
            <>
              <P>{description}</P>
              <P>{`Difficulty: ${difficulty}`}</P>
              <P>{`Num. of Cards: ${numOfCards}`}</P>
              <BtnFull title="Start" onPress={() => console.log('ping')} />
            </>
          )}
        </InnerContainer>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default Deck;
