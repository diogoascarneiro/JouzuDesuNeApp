// Navigation types
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type LoggedOutStackParams = {
  Start: undefined;
  Login: undefined;
  Signup: undefined;
};

export type LoggedInStackParams = {
  BottomTabs: undefined;
  DeckSession: undefined;
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
export interface DeckShape {
  _id?: string;
  name: string;
  cards: [CardShape];
  description: string;
  difficulty: number;
  image: string;
  dependencies: [any];
}

export interface UserShape {
  _id?: string;
  username?: string;
  userType?: string;
  email?: string;
  password?: string;
  profilePicture?: string;
  cards?: [CardShape];
  decks?: [];
}
