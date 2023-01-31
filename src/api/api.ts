import axios from 'axios';
import {DeckShape, UserShape, ICardScores} from '../utils/globalTypes';
import {REACT_APP_JOUZUDESUNE_API} from '@env';

// Typescript interfaces
interface RandomDeckOptions {
  number: number;
  type: string;
  userId: string;
}

const baseURL = `${REACT_APP_JOUZUDESUNE_API}/api`;

/* Users */

// export const getAllUsers = () => {
//   return axios.get(`${baseURL}/users`);
// };

export const getUser = (id: string) => {
  return axios.get(`${baseURL}/users/${id}`);
};

export const deleteUser = (id: string) => {
  return axios.delete(`${baseURL}/users/${id}`);
};

export const addUser = (user: UserShape) => {
  return axios.post(`${baseURL}/users`, user);
};

export const updateUser = (updatedUser: UserShape) => {
  return axios.put(`${baseURL}/users/${updatedUser._id}`, updatedUser);
};

// Function below is mainly used for profile pics but could be useful for something else in the future
export const upload = (uploadData: any) => {
  return axios.post(`${baseURL}/upload`, uploadData);
};

// User -> Deck and User -> Card data update functions

export const getUserDeckData = (user: UserShape, deckId: string) => {
  return axios.get(`${baseURL}/users/${user._id}/decks/${deckId}`);
};

export const updateUserDeckData = (
  user: UserShape,
  deckId: string,
  deck: DeckShape,
) => {
  return axios.put(`${baseURL}/users/${user._id}/decks/${deckId}`, deck);
};

export const getUserCardData = (user: UserShape, cardId: string) => {
  return axios.get(`${baseURL}/users/${user._id}/cards/${cardId}`);
};

export const updateUserCardData = (
  user: UserShape,
  cardId: string,
  card: string,
) => {
  return axios.put(`${baseURL}/users/${user._id}/cards/${cardId}`, card);
};

export const updateAllDeckCards = (user: UserShape, cards: ICardScores[]) => {
  return axios.put(`${baseURL}/users/${user._id}/cards/`, cards);
};

export const getRandomDeck = (options: RandomDeckOptions) => {
  return axios.get(`${baseURL}/decks/random`, {
    params: {
      number: options.number,
      type: options.type,
      userId: options.userId,
    },
  });
};
/* Auth */

export const signup = (user: UserShape) => {
  return axios.post(`${baseURL}/auth/signup`, user);
};

export const login = (user: UserShape) => {
  return axios.post(`${baseURL}/auth/login`, user);
};

export const verify = (storedToken: string) => {
  return axios.get(`${baseURL}/auth/verify`, {
    headers: {Authorization: `Bearer ${storedToken}`},
  });
};

/* Cards */

export const getAllCards = () => {
  return axios.get(`${baseURL}/cards`);
};

export const getCard = (id: string) => {
  return axios.get(`${baseURL}/cards/${id}`);
};

/*
export const deleteCard = (id) => {
    return axios.delete(`${baseURL}/cards/${id}`);
}
export const addCard = (card) => {
    return axios.post(`${baseURL}/cards`, card);
}
export const updateCard = (updatedCard) => {
    return axios.put(`${baseURL}/cards/${updatedCard._id}`, updatedCard)
}
*/

/* Decks */

export const getAllDecks = () => {
  return axios.get(`${baseURL}/decks`);
};

export const getDeck = (id: string) => {
  return axios.get(`${baseURL}/decks/${id}`);
};

export const deleteDeck = (id: string) => {
  return axios.delete(`${baseURL}/decks/${id}`);
};

export const addDeck = (deck: DeckShape) => {
  return axios.post(`${baseURL}/decks`, deck);
};

export const updateDeck = (updatedDeck: DeckShape) => {
  return axios.put(`${baseURL}/decks/${updatedDeck._id}`, updatedDeck);
};
