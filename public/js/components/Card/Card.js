/* eslint-disable indent */
import Component from '../Component.js';
export default class PokemonCard extends Component {
    #getPokemonTypes() {
        let types = '';
        for (const type of this.#cardId.types) {
            types += `
        <img class = "pokemonCard-info__icons"
          src="./images/icons/${type.type.name}.svg"
          alt="${this.#cardId.name}"
        >
      `;
        }
        return types;
    }
    #cardId;
    constructor(parentElement, cardId, cssClasses = '') {
        super(parentElement, 'article', cssClasses);
        this.#cardId = cardId;
    }
    render() {
        super.render();
        this.element.innerHTML = `<div class="pokemonCard-pic">
              <img class="pokemonCard-pic__gif"
                src= ${this.#cardId.sprites.versions['generation-v']['black-white']
            .animated.front_default}
                alt="${this.#cardId.name}" /> </div>
              <div class="pokemonCard-info">
              <h4 class="pokemonCard-info__name">${this.#cardId.name}</h4>
              <ul class="pokemonCard-info__characteristics">
                <li> Base experience: ${this.#cardId.base_experience} </li>
                <li> Weight: ${this.#cardId.weight} </li>
                <li> Type: ${this.#getPokemonTypes()} </li></div>
             <div class="pokemonCard-extra">
             <span>${this.#cardId.id}</span>
             <img class="pokemonCard-extra-pokeball" src=./images/pokemon-pokeball.svg
             </div>
              `;
    }
}
