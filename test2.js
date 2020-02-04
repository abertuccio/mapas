export const MATH_PATTERN = /(\d+(-)+\d)/;;
export function math() {

    let result;
    //pattern = /(\d+(-)+\d)/;
    let numbers = input.split('-');

    let a = numbers[0];
    let b = numbers[1];

    result = `

        Neperiano:            ${(Math.log(a))}  
        Raíz:                 ${(Math.sqrt(a))}
        Elevado:              ${(Math.pow(a,b))}
        Más cercano y menor:  ${(Math.floor(a))}
        Más cercano y mayor:  ${(Math.ceil(b))}
        Redondeo:             ${(Math.round(a))}
        Número random (0-1):  ${(Math.random())}  Número random (a-b): ${(Math.random(a * b))}
        Seno:                 ${(Math.sin(b))}
        Coseno:               ${(Math.cos(b))}
        Tangente:             ${(Math.tan(b))}
        Absoluto:             ${(Math.abs(a))}
        Valor máximo:         ${(Math.max(a,b))}
        Valor mínimo:         ${(Math.min(a,b))}
        -----------------------------------------
        Hipotenusa:           ${(Math.hypot(a,b))}

        `;

        return (result);

}