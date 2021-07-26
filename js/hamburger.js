function openHamburger() {
    var navbar = document.getElementById("myTopnav"); //dichiarazione e inizializzazione Navbar

    if (navbar.className === "topnav") {  //if(condizione) "topnav" === "topnav"
      navbar.className = "topnav" + " responsive"; //aggiungo a navbar la classe "responsive" --> serve per aprire il menu con le voci 
    } else { //Altrimenti
      navbar.className = "topnav"; //assegno a navbar la classe di nome "topnav";
    }
}
