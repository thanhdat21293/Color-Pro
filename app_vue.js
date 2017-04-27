const convert = require("color-convert");

let color = ["#ffa200", "#ea4335", "#ffffff"];

let color1 = {
    "L" : 74,
    "A" : 25,
    "B" : 79
}
let color2 = {
    "L" : 54,
    "A" : 63,
    "B" : 46
}
let color3 = {
    "L" : 100,
    "A" : 0,
    "B" : -0
}

function DeltaECIE ( color1, color2 ){
    let similar_score = Math.sqrt ( Math.pow ( ( color1.L - color2.L ), 2 )
               + Math.pow ( ( color1.A - color2.A ), 2 )
               + Math.pow ( (color1.B - color2.B ), 2));
    return similar_score;
}

console.log(DeltaECIE(color1,color2));