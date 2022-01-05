
// on utilise setInterval pour appeler une fonction a repetition!
setInterval(changeBG, 2000);

changeBG();

function changeBG(){
    const val1 = getRandomRGB();
    const val2 = getRandomRGB();
    const val3 = getRandomRGB();

    const colorString = `rgb(${val1},${val2},${val3})`

    console.log(colorString);

    document.body.style.background = colorString;
    document.getElementById('color'). innerHTML = colorString
}

function getRandomRGB(){
    return Math.floor(Math.random() * 256)
}