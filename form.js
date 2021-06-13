class Form{

    constructor() {
          
        this.nameInput = createInput('Your Name');

        this.kit1 = createSprite(dWidth/2 - 100, dHeight /2 + 200, 50, 50);
        this.kit2 = createSprite(dWidth/2, dHeight/2 + 200, 50, 50);
        this.kit3 = createSprite(dWidth/2 + 100, dHeight/2 + 200, 50, 50);

    }

    display(){
        
        strokeWeight(1);
        stroke("white");

        text("Name : ", dWidth/2 - 200, dHeight/2 - 200);
        this.nameInput.position(dWidth/2 - 100, dHeight/2 - 200);

        text("Goal : ", dWidth/2 - 200, dHeight/2 - 100);
        text(" Abcefghijklmno", dWidth - 100, dHeight/2 - 100);

        text("Kits : ", dWidth/2 - 200, dHeight/2 + 200)

    }

    mousePressed(){

        if(mousePressedOver(kit1)){

            console.log("a");

        }

    }

}
