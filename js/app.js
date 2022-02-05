console.log('Welcome');

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', menuactivate);
const intro = document.querySelector('.intro-1');
const secondIntro = document.querySelector('.intro-2');
const menu = document.querySelector('.menu');
const menuBtnclose = document.getElementById('menuBtnclose');
menuBtnclose.addEventListener('click', menuclose);
const close = document.querySelector('.cencel');

function menuactivate() {
    if (menu.style.top = '-9999px') {

        menu.style.top = '147px';
        menuBtn.style.display = 'none';
        close.style.display = 'block';
        intro.style.display = 'none';
        secondIntro.style.marginTop = '20em';
    }
}

function menuclose() {
    if (menu.style.top = '147px') {

        menu.style.top = '-9999px';
        menuBtn.style.display = 'block';
        close.style.display = 'none';
        intro.style.display = 'block';
        secondIntro.style.marginTop = '0em';
    }

}