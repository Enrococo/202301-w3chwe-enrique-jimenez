import Component from '../Component.js';

export default class LogoHeading extends Component {
  #src: string;

  constructor(
    src: string,
    parentElement: HTMLElement | null,
    cssClasses: string = '',
  ) {
    super(parentElement, 'img', cssClasses);
    this.#src = src;
  }

  render(): void {
    super.render();
    const logo = this.element as HTMLImageElement;
    logo.src = this.#src;
  }
}
