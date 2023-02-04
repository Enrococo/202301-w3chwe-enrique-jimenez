import Component from '../Component.js';
import MenuButton from '../MenuButton/MenuButton.js';

export default class Menu extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | null, cssClasses: string = '') {
    super(parentElement, 'section', cssClasses);
    this.#children = [
      new MenuButton('All', this.element, 'button', 'menu-button'),
      new MenuButton('My PokéMoN', this.element, 'button', 'menu-button'),
      new MenuButton('DeTaILs', this.element, 'button', 'menu-button'),
    ];
  }

  render(): void {
    super.render();
    this.#children.forEach(component => component.render());
  }
}
