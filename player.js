class Player{
    constructor(){
        this.name = null
        this.score = 0
    }

    displayScore(){
        textSize(15)
        fill("white")
        text("Score:" + this.score, 200,50)
    }
}