
function calcularMedia (m1, m2, m3){
let media = (m1+m2+m3)/3
     
    if(media>=7){
        return `sua média foi: ${media}.e Aprovado :)`
    }if (media >= 5 && media< 7){
        return `sua média foi: ${media} Recuperação :( `
    }if (media >5){
        return `sua média foi: ${media} Reprovado :/ `
    }
}


console.log(calcularMedia(8, 5, 3))