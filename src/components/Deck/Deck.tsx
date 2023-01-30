import {useState} from 'react';
import {ImageSourcePropType, TouchableWithoutFeedback} from 'react-native';
import {BtnFull} from '../UI/Buttons';
import {Wrapper, Background, InnerContainer, TitleText, P} from './styled.Deck';
import {useNavigation} from '@react-navigation/native';
import {LoggedInStackParams} from '../../utils/globalTypes';

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
  const {navigate} = useNavigation<any>();

  return (
    <TouchableWithoutFeedback onPress={() => setIsFrontSide(!isFrontSide)}>
      <Wrapper>
        <Background source={bgImg} resizeMode="cover">
          <InnerContainer>
            {isFrontSide && <TitleText>{title}</TitleText>}
            {!isFrontSide && (
              <>
                <P>{description}</P>
                <P>{`Difficulty: ${difficulty}`}</P>
                <P>{`Num. of Cards: ${numOfCards}`}</P>
                <BtnFull
                  title="Start"
                  onPress={() => navigate('DeckSession')}
                />
              </>
            )}
          </InnerContainer>
        </Background>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default Deck;
