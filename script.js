let linha = [0,1,2,3,4,5,6,7,8,9]
let tabuleiro = [
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
];

function posicionar(no, x, y) {
    console.log(no, x ,y);
    if (x > 9 || x < 0 || y > 9 || y < 0) throw "posiçaõ está fora do tabuleiro";

    no.style.left = x*30 + "px";
    no.style.top = y*30 + "px";
}