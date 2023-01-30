import {useState, useEffect} from 'react';
import {getAllDecks} from '../../api/api';
import {DeckShape} from '../../utils/globalTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container, BtnFull, P, H1, Separator} from './styled.DeckListScreen';
import Deck from '../../components/Deck/Deck';
import {FlatList} from 'react-native';

// Temporary testing while api is not updated
const defaultBG = require('../../assets/img/decks/default.jpg');

const DeckListScreen = () => {
  const [deckList, setDeckList] = useState([] as DeckShape[]);

  useEffect(() => {
    (async () => {
      const response = await getAllDecks();
      setDeckList(response.data);
    })();
  }, []);

  return (
    <SafeAreaView>
      <Container paddedHorizontal>
        <H1>All decks</H1>
        <FlatList
          horizontal
          data={deckList}
          renderItem={({item}) => (
            <>
              <Deck
                title={item.name}
                bgImg={defaultBG}
                description={item.description}
                difficulty={item.difficulty}
                numOfCards={item.cards.length}
              />
              <Separator />
            </>
          )}
          keyExtractor={(item, index) => `${item._id}${index}`}
        />
      </Container>
    </SafeAreaView>
  );
};

export default DeckListScreen;
