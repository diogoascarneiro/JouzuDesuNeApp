import {CardShape} from '../../utils/globalTypes';

export const capitalizeMeanings = (card: CardShape) => {
  return card.wordMeanings.charAt(0).toUpperCase() + card.wordMeanings.slice(1);
};
