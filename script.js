function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar o img
  const img = document.querySelector("#profile img")

//substituir a img
if (html.classList.contains("light")){
  img.setAttribute("src", "./assets/Avatar2.png")
} else {
 img.setAttribute("src", "./assets/avatarzinho.png")
}

}
