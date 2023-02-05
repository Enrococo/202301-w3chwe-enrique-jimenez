import { pokemonsList } from '../../data/data.js';
import CardsList from '../CardsList/CardsList.js';
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
            new CardsList(this.element, pokemonsList),
        ];
    }
    render() {
        super.render();
        this.#children.forEach(component => component.render());
        console.log(pokemonsList);
    }
}
