// Change theme dark
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")


const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {
    bgColor: getStyle(html, "--bg-color"),
    secondBg: getStyle(html, "--bg-second"),
    textColor: getStyle(html, "--text-color"),
    secondColor: getStyle(html, "--second-color")
}


const darkMode = {
    bgColor: "#040404",
    secondBg: "#1f1f1f",
    textColor: "#ffffff",
    secondColor: "#f2f2f2"
}

const transformKey = Key => 
    "--" + Key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(Key =>
        html.style.setProperty(transformKey(Key), colors[Key])
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})


/* localStorage ===================================================== */
const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null


const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))


const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))


checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})


if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}