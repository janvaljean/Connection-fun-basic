const picture = document.querySelector('.picture');
const voice = document.querySelector('.voice');
const voice2 = document.querySelector('.voice2');
const voice3 = document.querySelector('.voice3');

//!rufen button
document.querySelector('.rufen').onclick = () => {
    picture.src = "../img/img.gif";
    //play()
    voice2.pause();
    voice3.pause();
    voice.play();
    voice.volume = 0.2;
    
}
//!kontakten button
document.querySelector('.kontakten').onclick = () => {
    picture.src = "../img/telbagla.gif";
    //pause()

    voice.pause();
    voice3.pause();


    voice2.play();
    voice2.volume = 0.2;
}

//!sprchen button
document.querySelector('.sprechen').onclick = () => {
    picture.src = "../img/telfirlat.gif";
    //pause()

    voice.pause();
    voice2.pause();
    voice3.play();

}

