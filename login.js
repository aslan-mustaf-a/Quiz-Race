class Login{
    constructor(){
        this.button = createButton("Play")
        this.input = createInput("").attribute("placeholder","Enter your name")
        this.title = createElement("h2")
        this.logo = createImg("qg..gif","logo")
        this.heading = createElement("h1")
    }

    display(){
        this.title.html("Quiz Game")
        this.title.class("Title_class")
        this.logo.position(100,200)
        this.logo.class("Logo_class")
        this.heading.html("Login")
        this.heading.position(1200,180)
        this.heading.class("Login_class")
        this.input.position(1000,400)
        this.input.class("Input_class")
        this.button.position(1025,600)
        this.button.class("Button_class")
        this.handleMousePressed()
    }

    handleMousePressed(){
        this.button.mousePressed(() => {
            this.input.hide()
            this.logo.hide()
            this.heading.hide()
            this.button.hide()
            playerObject.name = this.input.value()
            questions_object.display_q1()
            questions_object.display_q2()
            questions_object.display_q3()
            questions_object.display_q4()
            questions_object.display_q5()
        });
    
        }

        /*getPlayerName(){
            this.button.mousePressed(() => {
             if(system.authenticate(this.input.value)){

             }
            })*/

           
}

