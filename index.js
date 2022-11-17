const hamburgerButtonOpen = document.querySelector('#hamburgerButtonOpen');
const hamburgerButtonClose = document.querySelector('#hamburgerButtonClose');
const navMenu = document.querySelector('.nav');

hamburgerButtonOpen.onclick = () => {
    navMenu.style.display = 'block';
    hamburgerButtonOpen.style.display = 'none';
    hamburgerButtonClose.style.display = 'block';
}

hamburgerButtonClose.onclick = () => {
    navMenu.style.display = 'none';
    hamburgerButtonClose.style.display = 'none';
    hamburgerButtonOpen.style.display = 'block';
}

