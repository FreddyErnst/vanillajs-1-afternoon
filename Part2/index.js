let cardID = document.getElementById("idCard")
let cardColor = document.getElementById("cardStyle")
console.log(cardID)
console.log(cardColor)

function setCard(){
    var card = document.getElementById(idCard.value)
    card.style.color = cardStyle.value
    
    console.log(card);
}

