import PokemonCard from '../Card/Card.js';
import Component from '../Component.js';
export default class CardsList extends Component {
    #cardsListData;
    constructor(parentElement, PokemonsList) {
        super(parentElement, 'main', 'cards-list');
        this.#cardsListData = PokemonsList;
    }
    render() {
        super.render();
        for (const data of this.#cardsListData) {
            new PokemonCard(this.element, data, 'cards-list__item').render();
        }
    }
}
