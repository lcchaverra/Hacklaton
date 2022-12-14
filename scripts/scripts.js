
//Temas para la web
const changeThemeButtons = document.querySelectorAll('[name=theme]')
const rootStyles = document.documentElement.style
const lightTheme = {
    '--bg-color'    : "#eee",
    '--bg-color-2'  : "#fff",
    '--text-color'  : "#53575A",
    '--accent-color': "#rgb(103, 250, 103)",
    '--font'        : "'Product Sans', sans-serif",
    '--shadow'      : '2px 2px 7px 0 rgba(255, 255, 255, 0.795)'
}

const darkTheme = {
    '--bg-color'    : "#53575A",
    '--bg-color-2'  : "#282D31",
    '--text-color'  : "#eee",
    '--shadow'      : '2px 2px 7px 0 rgba(0, 0, 0, 0.795)'
}

for(let button of changeThemeButtons) {
    button.addEventListener('change', e => {
        if(e.target.id === 'dark'){
            changeTheme(darkTheme)
        } else if (e.target.id==='light') {
            changeTheme(lightTheme)
        }
    })
}

const changeTheme = theme => {
    let cssVars = Object.keys(theme)
    for (let cssVar of cssVars){
        rootStyles.setProperty(cssVar, theme[cssVar])
    }
}


// Botón Hamburguesa
const button = document.getElementById('burguer');
const mainMenu = document.getElementById('menu')
button.addEventListener('click', ()=>{
    button.classList.toggle('active')
    mainMenu.classList.toggle('active')
}) 