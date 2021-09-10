const NAV_MENU = document.querySelector('.nav.main-nav')

window.onscroll = function () {
    if(document.documentElement.scrollTop > 2){
        NAV_MENU.style.backgroundColor = '#fff'
    } else {
        NAV_MENU.style.backgroundColor = 'transparent'
    }
}