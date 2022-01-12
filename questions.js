class Questions{
    constructor(){
        this.h1 = createElement("h4")
        this.h2 = createElement("h4")
        this.h3 = createElement("h4")
        this.h4 = createElement("h4")
        this.h5 = createElement("h4")
        this.q1 = createElement("h4")
        this.q2 = createElement("h4")
        this.q3 = createElement("h4")
        this.q4 = createElement("h4")
        this.q5 = createElement("h4")

        this.button1 = createButton("Submit")
        this.input1 = createInput("").attribute("placeholder","Enter your answer")

        this.button2 = createButton("Submit")
        this.input2 = createInput("").attribute("placeholder","Enter your answer")

        this.button3 = createButton("Submit")
        this.input3 = createInput("").attribute("placeholder","Enter your answer")

        this.button4 = createButton("Submit")
        this.input4 = createInput("").attribute("placeholder","Enter your answer")

        this.button5 = createButton("Submit")
        this.input5 = createInput("").attribute("placeholder","Enter your answer")
    }

    display_q1(){
     this.q1.html("A U _ _ _ A _ I A")
     this.h1.html("Hint:Lost a war to birds")
     this.q1.position(100,150)
     this.h1.position(100,175)
     this.input1.position(100,225)
     this.button1.position(100,250)

     this.button1.class("Button_class2")
    }
  
    display_q2(){
     this.q2.html("_ I _ P _ O _ S")
     this.h2.html("Hint:A cartoon for kids and adults")
     this.q2.position(100,275)
     this.h2.position(100,300)
     this.input2.position(100,350)
     this.button2.position(100,375)

     this.button2.class("Button_class2")
    }

    display_q3(){
        this.q3.html("_ A N _ E _ R A")
        this.h3.html("Hint:Capital city of Australia")
        this.q3.position(100,400)
        this.h3.position(100,425)
        this.input3.position(100,475)
        this.button3.position(100,500)
   
        this.button3.class("Button_class2")
       }

       display_q4(){
        this.q4.html("T _ _ R _ _ S _ _ T")
        this.h4.html("Hint:Controls the temprature in your house")
        this.q4.position(100,525)
        this.h4.position(100,550)
        this.input4.position(100,600)
        this.button4.position(100,625)
   
        this.button4.class("Button_class2")
       }

       display_q4(){
        this.q4.html("T _ _ R _ _ S _ _ T")
        this.h4.html("Hint:Controls the temprature in your house")
        this.q4.position(100,525)
        this.h4.position(100,550)
        this.input4.position(100,600)
        this.button4.position(100,625)
   
        this.button4.class("Button_class2")
       }

       display_q5(){
        this.q5.html("S P _ _ K _ _ S")
        this.h5.html("Hint:Plays music")
        this.q5.position(100,650)
        this.h5.position(100,675)
        this.input5.position(100,720)
        this.button5.position(100,755)
   
        this.button5.class("Button_class2")
       }
}