let NavbarHamburgerMenuButton = document.getElementById('navbar-hamburger-menu-button')
let NavbarHamburgerMenuButtonPhone = document.getElementById('navbar-hamburger-menu-button-phone')

let HamburgerMenuExitButton = document.getElementById('hamburger-menu-exit-button')
let HamburgerMenuExitButtonPhone = document.getElementById('hamburger-menu-exit-button-phone')

let HamburgerMenu = document.getElementById('hamburger-menu')
let HamburgerMenuPhone = document.getElementById('hamburger-menu-phone-container')



//Show Hamburger Menu on desktop devices
let HamburgerMenuVisable = false

NavbarHamburgerMenuButton.onclick = function() {
    if(HamburgerMenuVisable === false) {
        HamburgerMenu.setAttribute('style', 'display:block')
        let HamburgerMenuVisable = true
    } 
}

//Hide Hamburger Menu on desktop devices

HamburgerMenuExitButton.onclick = function() {
        HamburgerMenu.setAttribute('style', 'display:none')
        let HamburgerMenuVisable = false
}

//Show Hamburger Menu on phones
let HamburgerMenuPhoneVisable = false

NavbarHamburgerMenuButtonPhone.onclick = function() {
    if(HamburgerMenuPhoneVisable === false) {
        HamburgerMenuPhone.setAttribute('style', 'display:block')
        let HamburgerMenuPhoneVisable = true
    } 
}


//Hide Hamburger Menu on phones
HamburgerMenuExitButtonPhone.onclick = function() {
    HamburgerMenuPhone.setAttribute('style', 'display:none')
    let HamburgerMenuPhoneVisable = false
}



//CSS
//Dice


let dice1 = document.getElementById('dice')

let imgtop = document.getElementById('imgtop');
let imgside1 = document.getElementById('imgside1');
let imgside2 = document.getElementById('imgside2');
let imgside3 = document.getElementById('imgside3');
let imgside4 = document.getElementById('imgside4');
let imgbottom = document.getElementById('imgbottom');

let side = document.getElementsByClassName('side')

let clickbereich = document.getElementById('wuerfel');

function dice() {
    return 1 + Math.floor(Math.random() * 6);
}   

clickbereich.onclick = function () {
    bildwechsel(dice());
    rotate();
}

let isRotated = false;

function rotate() {
    if(isRotated){
        dice1.classList.remove('rotate1');
        isRotated = false;
    }else{
        dice1.classList.add('rotate1');
        isRotated = true;
    }
}

function bildwechsel(wuerfel) { 
    
if(wuerfel === 1){
    
    imgtop.setAttribute('src','/Portfolio/img/dice1.svg')
    imgside1.setAttribute('src', '/Portfolio/img/dice4.svg')
    imgside2.setAttribute('src', '/Portfolio/img/dice5.svg')
    imgside3.setAttribute('src', '/Portfolio/img/dice2.svg')
    imgside4.setAttribute('src', '/Portfolio/img/dice3.svg')
    imgbottom.setAttribute('src', '/Portfolio/img/dice6.svg')
}

else if (wuerfel === 2) {

    imgtop.setAttribute('src','/Portfolio/img/dice2.svg')
    imgside1.setAttribute('src', '/Portfolio/img/dice4.svg')
    imgside2.setAttribute('src', '/Portfolio/img/dice1.svg')
    imgside3.setAttribute('src', '/Portfolio/img/dice6.svg')
    imgside4.setAttribute('src', '/Portfolio/img/dice3.svg')
    imgbottom.setAttribute('src', '/Portfolio/img/dice5.svg')
    
}
else if (wuerfel === 3) {

    imgtop.setAttribute('src','/Portfolio/img/dice3.svg')
    imgside1.setAttribute('src', '/Portfolio/img/dice6.svg')
    imgside2.setAttribute('src', '/Portfolio/img/dice2.svg')
    imgside3.setAttribute('src', '/Portfolio/img/dice5.svg')
    imgside4.setAttribute('src', '/Portfolio/img/dice4.svg')
    imgbottom.setAttribute('src', '/Portfolio/img/dice1.svg')

}
else if (wuerfel === 4) {

    imgtop.setAttribute('src','/Portfolio/img/dice4.svg')
    imgside1.setAttribute('src', '/Portfolio/img/dice1.svg')
    imgside2.setAttribute('src', '/Portfolio/img/dice2.svg')
    imgside3.setAttribute('src', '/Portfolio/img/dice5.svg')
    imgside4.setAttribute('src', '/Portfolio/img/dice6.svg')
    imgbottom.setAttribute('src', '/Portfolio/img/dice3.svg')

}
else if (wuerfel === 5) {

    imgtop.setAttribute('src','/Portfolio/img/dice5.svg')
    imgside1.setAttribute('src', '/Portfolio/img/dice4.svg')
    imgside2.setAttribute('src', '/Portfolio/img/dice6.svg')
    imgside3.setAttribute('src', '/Portfolio/img/dice3.svg')
    imgside4.setAttribute('src', '/Portfolio/img/dice1.svg')
    imgbottom.setAttribute('src', '/Portfolio/img/dice2.svg')

}
else if (wuerfel === 6) {

    imgtop.setAttribute('src','/Portfolio/img/dice6.svg')
    imgside1.setAttribute('src', '/Portfolio/img/dice4.svg')
    imgside2.setAttribute('src', '/Portfolio/img/dice2.svg')
    imgside3.setAttribute('src', '/Portfolio/img/dice5.svg')
    imgside4.setAttribute('src', '/Portfolio/img/dice3.svg')
    imgbottom.setAttribute('src', '/Portfolio/img/dice1.svg')
}


}

