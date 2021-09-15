const NAV_MENU = document.querySelector('.nav.main-nav')
const SEARCH_BAR = document.querySelector('.search-bar')
const BTN_LINK = document.querySelector('.border-button-link')
const LINKS_MENU = document.querySelectorAll('.nav-link')

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