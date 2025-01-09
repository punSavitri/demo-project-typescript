/*Getting Started here... start with making the form visible on the page with the help of oop appraoch */
//projectinput class
class ProjectInput {
    //dom elements selection & OOP rendering  
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement; 
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    
    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        //import the content of the form element into the dom
        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';  //setting form margin  
        
        /*interacting with DOM input elements of form */
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        //excute ones form submit
        this.configure();

        //call method to render the form on web page
        this.attach();
    }

    private submitHandler(event: Event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }
    
    //this method add event listener
    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));

    }
    //this method render the content of template
    private attach() {
        //this insrtAdjacentElement() is the default method provide on js means where to insert or place
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

//create instance of class 
const proInput = new ProjectInput();

