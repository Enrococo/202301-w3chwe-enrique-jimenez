import Component from '../Component.js';
export default class LogoHeading extends Component {
    #src;
    constructor(src, parentElement, cssClasses = '') {
        super(parentElement, 'img', cssClasses);
        this.#src = src;
    }
    render() {
        super.render();
        const logo = this.element;
        logo.src = this.#src;
    }
}
