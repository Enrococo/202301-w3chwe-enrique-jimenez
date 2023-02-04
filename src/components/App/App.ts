import Component from '../Component.js';
import LogoHeading from '../LogoHeading/LogoHeading.js';
import Menu from '../Menu/Menu.js';

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | null, cssClasses: string = '') {
    super(parentElement, 'div', cssClasses);
    this.#children = [
      new LogoHeading('/images/pokemon-logo.svg', this.element, 'main-header'),
      new Menu(this.element, 'menu'),
    ];
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
  }
}
