window.onload =()=> {
    let cardAmmount = prompt("Počet karet?","9");
    cardAmmount = parseInt(cardAmmount);
    let cardDeck = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //base deck
    let cards=[];
    let deck=[]; //actual deck

    //create cards
    for (let i = 0;i<cardAmmount;i++){
        cards[i]=cardDeck[i];
    }
    cards=cards.concat(cards);

    //shufle cards
    while (cards.length>0){
        let rng = Math.floor(Math.random() * cards.length);
        deck[deck.length] = cards[rng];
        cards.splice(rng,1);
    }

    //actual game
    let htmlDeck = document.getElementById("deck");

    //generate cards
    for (let i = 0;i<deck.length;i++){
        htmlDeck.innerHTML+="<div class='card hidden'><p class='text-hidden'>"+ deck[i] +"</p></div>";
    }
    //add click event
    let q = document.getElementsByClassName("card");
    for (let i = 0;i<q.length;i++){
        q[i].addEventListener("click",cardDoStuff);
    }


    //actual actual game
    let revealed = 0;
    let lastRevealedLetter = null;
    let firstClicked = null;

    function cardDoStuff(click) {
        console.log("Clicked :"+click.toElement);

        //click
        if (click.toElement.tagName=="DIV" & firstClicked!=click.toElement){
            //hide missmatched cards
            if (revealed==2){
                for (let i = 0;i<q.length;i++){
                    if (q[i].classList.contains("revealed")) {
                        q[i].className = "card hidden";
                        q[i].children[0].className = "text-hidden"
                    }
                }
                revealed=0;
            }


            revealed++;
            click.toElement.className="card revealed";
            click.toElement.children[0].className="text-normal";

            if (revealed==1){
                lastRevealedLetter=click.toElement.children[0].innerHTML;
                firstClicked=click.toElement;
            }

            //do stuff
            if (revealed==2){
                if(lastRevealedLetter===click.toElement.children[0].innerHTML){
                    console.log("win");
                    firstClicked.className="card done";
                    click.toElement.className="card done";
                }

            }


        }

    }
}