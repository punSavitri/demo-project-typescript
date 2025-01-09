/*Getting Started here... start with making the form visible on the page with the help of oop appraoch */

//projectinput class
class ProjectInput {
    //dom elements selection & OOP rendering  
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement; 
    element: HTMLFormElement;
    
    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        //import the content of the form element into the dom
        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';        

        //call method to render the form on web page
        this.attach();
    }
    
    //this method render the content of template
    private attach() {
        //this insrtAdjacentElement() is the default method provide on js means where to insert or place
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

//create instance of class 
const proInput = new ProjectInput();

