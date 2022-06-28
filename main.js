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


//Hide Hamburger Menu on
HamburgerMenuExitButtonPhone.onclick = function() {
    HamburgerMenuPhone.setAttribute('style', 'display:none')
    let HamburgerMenuPhoneVisable = false
}