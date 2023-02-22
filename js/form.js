class Form {
    constructor(){

    }


    posicionar(){
        this.titulo.position(120, 50);
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 90, height / 2 - 20);
        this.saudacao.position(width / 2 - 300, height / 2 - 100);
    }
    estilizar(){
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.titulo.class("gameTitle");
        this.saudacao.class("greeting");
    }

}