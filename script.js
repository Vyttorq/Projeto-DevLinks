function toggleMode () {
    const html = document.documentElement;
    html.classList.toggle('light'); 

    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/Foto-Vyttor-light.svg");
    img.setAttribute("alt", "Foto de Vyttor Mendes Olhando para o lado usando óculos escuros com cara de sério");
}  else {
    img.setAttribute("src", "./assets/Foto-Vyttor.svg");
    img.setAttribute("alt", "Foto de Vyttor Mendes Olhando para o lado usando óculos com cara de sério");
}


}