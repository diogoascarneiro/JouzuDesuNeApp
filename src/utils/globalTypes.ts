// Navigation types
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type LoggedOutStackParams = {
  Start: undefined;
  Login: undefined;
  Signup: undefined;
};

export type LoggedInStackParams = {
  BottomTabs: undefined;
  DeckSession: {deckId: string};
};

export type StartProps = NativeStackScreenProps<LoggedOutStackParams, 'Start'>;
export type LoginProps = NativeStackScreenProps<LoggedOutStackParams, 'Login'>;
export type SignupProps = NativeStackScreenProps<
  LoggedOutStackParams,
  'Signup'
>;

export type BottomTabsProps = NativeStackScreenProps<
  LoggedInStackParams,
  'BottomTabs'
>;

export type DeckSessionProps = NativeStackScreenProps<
  LoggedInStackParams,
  'DeckSession'
>;

// DB Item Shapes
export interface CardShape {
  _id?: string;
  cardNumber: number;
  questionWord: string;
  wordWithFurigana: string;
  wordInKana: string;
  wordMeanings: string;
  wordType: string;
  exampleSentence: string;
  exampleWithFurigana: string;
  exampleInKana: string;
  exampleTranslation: string;
  exampleClozed: string;
  difficulty: string;
  wordCategory: string;
  wordSubcategory: string;
}

// Cards inside User documents, with extra info relating to scores for that user
export interface UserCardShape {
  averageScore: number;
  cardId: CardShape;
  score: number;
  timesSeen: number;
  _id: string;
}

export interface DeckShape {
  _id?: string;
  name: string;
  cards: CardShape[];
  description: string;
  difficulty: number;
  image: string;
  dependencies: any[];
}

export interface UserShape {
  _id?: string;
  username?: string;
  userType?: string;
  email?: string;
  password?: string;
  profilePicture?: string;
  cards?: UserCardShape[];
  decks?: [];
}
