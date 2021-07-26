var slideIndex = 1; //Dichiaro e Inizializzo un contatore = 1 -> Serve metterlo globale perchè ci sono funzioni che andranno a modificare questo contatore 
                    //(questo permette di avere sempre sotto controllo le slide)
showSlides(slideIndex); //Esecuzione della funzione con la var. indice passato come parametro.

/* Funzione per mostrare l'immagine X passata come parametro n */
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides"); //Dichiaro e Inizializzo un Array di dimensione N quanti sono gli elementi "mySlides" 
  var slidesToActive = document.getElementsByClassName("demo"); //Variabile per visualizzare successivamente l'immagine attiva all'interno del Modal (senso principio di slides)
  
  var i; //Contatore per nascondere le slides e l'immagine attiva nel Modal

  if (n > slides.length) {slideIndex = 1} //Controllo per resettare il conteggio delle slide

  if (n < 1) {slideIndex = slides.length} //Controllo per evitare che n sia 0

  for (i = 0; i < slides.length; i++) { //Ciclo per nascondere tutte le slide
      slides[i].style.display = "none";
  }

  for (i = 0; i < slidesToActive.length; i++) { //Ciclo per nascondere la slide corrente
    slidesToActive[i].className = slidesToActive[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; //Slide da visualizzare
  slidesToActive[slideIndex-1].className += " active";  //Slide attivata
}

/* Funzioni per le freccie < e > */
function plusSlides(n) {
  slideIndex = n + slideIndex; //se n è +1 mostra la successiva altrimenti se n è -1 mostra la precedente
  showSlides(slideIndex); //Esecuzione della funzione con l'indice(+1 o -1) passato per parametro;
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

/* Funzioni per aprire e/o chiudere la finestra che visualizza le immagini (la finestra si chiama Modal) */
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("content").style.display = "none";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("content").style.display = "block";
}