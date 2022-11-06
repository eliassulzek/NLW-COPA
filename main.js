function createGame(player1, hour, player2) {
    return `
    <li> 
            <img src="./assets/icon-${player1}.svg" alt=" Bandeira do ${player1} ">
            <strong> ${hour} </strong>
            <img src="./assets/icon-${player2}.svg" alt=" Bandeira da ${player2} ">
       
    </li>

    `
}




let delay= 0;
function createCard(date, day, games) {
    delay = delay + 0.3;
 return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day} </span></h2>

    <ul>
    ${games}
     </ul>
    </div>
    `
}

document.querySelector( "#cards" ).innerHTML = 


    createCard("24/11", "Quinta",
    createGame("Brazil", "16:00", "Sérvia") + 
    createGame("Uruguay", "10:00", "South-korea") + 
    createGame("Portugal", "13:00", "Ghana")) + 
   

    createCard("28/11", "Segunda",
    createGame("Cameroon", "7:00", "Sérvia")) + 
    createCard("28/11", "Segunda",
    createGame("Switzerland", "13:00", "Brazil") + 
    createGame("South-korea", "10:00", "Ghana") + 
    createGame("Portugal", "16:00", "Uruguay")) +

    createCard("02/12", "Sexta",
    createGame("Brazil", "18:00", "Cameroon") + 
    createGame("Ghana", "12:00", "Uruguay") + 
    createGame("South-korea", "12:00", "Portugal"))

    
