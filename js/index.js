var slideIndex = 0; //Dichiarazione della Variabile contatore (indice delle slide);
var slides = document.getElementsByClassName("mySlides"); //variabile slides -> qui ci sono tutte le slide
/*
slides[0]= "slide 1"
slides[1]= "slide 2"
slides[2]= "slide 3"
slides[3]= "slide 4"
slides[4]= "slide 5"
slides[5]= "slide 6"
*/
showSlides(); //Esecuzione della funzione;

function hideSlides(){ //Dichiarazione della funzione di nome hideSlides
  for (i = 0; i < slides.length; i++) { //si chiama ciclo for e serve per fare delle iterazioni
    slides[i].style.display = "none"; //assegniamo all'attributo display, di slides[indice], il valore "none";
  }
}

function showSlides(){ //Dichiarazione della funzione di nome showSlides
  hideSlides(); //Esecuzione della funzione;
  slideIndex++; //incremento il contatore di 1;
  //Inizio condizione
  if(slideIndex > slides.length){ 
    slideIndex = 1; //setta il contatore a 1;
  }
  //fine condizione
  slides[slideIndex-1].style.display = "block";  //Cambia l'attributo display, di slides, da "none" a "block";
  setTimeout(showSlides, 5000);  //setTimeout esegue la funzione showSlides ogni 5.0 secondi;
}

//Cambio Tema
/*
var darkTheme = true;

function changeCSS() {
    var hrefDark = "./css/index1.css";
    var hrefLight = "./css/index2.css";
    var link = document.getElementsByTagName("link").item(0);

    if(darkTheme) {
      link.setAttribute("href", hrefLight);
    }
    else {
      link.setAttribute("href", hrefDark);
    }
    
    darkTheme = !darkTheme;
}
*/
