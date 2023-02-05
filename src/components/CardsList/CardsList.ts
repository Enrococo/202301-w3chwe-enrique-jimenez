import PokemonCard from '../Card/Card.js';
import Component from '../Component.js';
import { PokemonsList } from '../types.js';

export default class CardsList extends Component {
  #cardsListData: PokemonsList[];

  constructor(parentElement: HTMLElement, PokemonsList: PokemonsList[]) {
    super(parentElement, 'main', 'cards-list');
    this.#cardsListData = PokemonsList;
  }

  render(): void {
    super.render();
    for (const data of this.#cardsListData) {
      new PokemonCard(this.element, data, 'cards-list__item').render();
    }
  }
}
