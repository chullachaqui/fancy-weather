export class HTMLelement {
    //creates HTML element, @attributes - object
    constructor (type, parent, classes, attributes) {
        const element = document.createElement(type);
        if (classes) {
            element.classList.add(classes);
        }
        parent.appendChild(element);
        if (attributes) {
            Object.keys(attributes).forEach((key) => {
                element.setAttribute(key, attributes[key]);
            })
        }
        return element;
    }
}
