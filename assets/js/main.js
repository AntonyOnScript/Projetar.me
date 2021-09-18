const NAV_MENU = document.querySelector('.nav.main-nav')
const SEARCH_BAR = document.querySelector('.search-bar')
const BTN_LINK = document.querySelector('.border-button-link')
const LINKS_MENU = document.querySelectorAll('.nav-link')
const ALL_MENU_LINKS = document.querySelector(".links-menu")
const MOBILE_MENU_CONTAINER = document.querySelector('.mobile-menu .uk-offcanvas-bar')
const MOBILE_MENU = document.querySelector('.mobile-menu  .uk-nav')
const MOBILE_MENU_BUTTON = document.querySelector('.mobile-menu-button')

window.onscroll = function () {
    if(document.documentElement.scrollTop > 2){
        NAV_MENU.style.backgroundColor = '#fff'
        SEARCH_BAR.style.visibility = 'visible'
        BTN_LINK.style.color = 'var(--color-one)'
        mudaCorLinksMenu()
    } else {
        NAV_MENU.style.backgroundColor = 'transparent'
        SEARCH_BAR.style.visibility = 'hidden'
        BTN_LINK.style.color = 'white'
        mudaCorLinksMenu(1)
    }
}

function mudaCorLinksMenu(option) {
    if(option === 1) {
        LINKS_MENU.forEach(element => {
            element.style.color = 'white'
        })
        
    } else {
        LINKS_MENU.forEach(element => {
            element.style.color = 'var(--color-one)'
        })
    }
}

function loadMenuLinksIntoMobileMenu() {
    const LINKS = ALL_MENU_LINKS.querySelectorAll('.nav-link')
    LINKS.forEach(element => {
        const li = document.createElement("li")
        element = element.cloneNode(true)
        element.removeAttribute('class')
        li.appendChild(element)
        MOBILE_MENU.appendChild(li)
    })
}

loadMenuLinksIntoMobileMenu()

MOBILE_MENU_BUTTON.onclick = () => {
    MOBILE_MENU_CONTAINER.style.animation = 'showMenu .5s'
}