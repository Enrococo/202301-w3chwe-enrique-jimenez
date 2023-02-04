import Component from '../Component.js';
export default class MenuButton extends Component {
    #button;
    constructor(buttonText, parentElement, type = '', cssClasses = '') {
        super(parentElement, 'button', cssClasses);
        this.#button = buttonText;
        const button = this.element;
        button.type = type;
    }
    render() {
        super.render();
        const button = this.element;
        button.textContent = this.#button;
    }
}
