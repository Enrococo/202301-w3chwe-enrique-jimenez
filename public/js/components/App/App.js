import PokemonCard from '../Card/Card.js';
import Component from '../Component.js';
import LogoHeading from '../LogoHeading/LogoHeading.js';
import Menu from '../Menu/Menu.js';
export default class App extends Component {
    #children;
    constructor(parentElement, cssClasses = '') {
        super(parentElement, 'div', cssClasses);
        this.#children = [
            new LogoHeading('/images/pokemon-logo.svg', this.element, 'main-header'),
            new Menu(this.element, 'menu'),
            new PokemonCard(this.element, 1, 'pokemonCard'),
            new PokemonCard(this.element, 1, 'pokemonCard'),
            new PokemonCard(this.element, 1, 'pokemonCard'),
            new PokemonCard(this.element, 1, 'pokemonCard'),
        ];
    }
    render() {
        super.render();
        this.#children.forEach(component => component.render());
    }
}
