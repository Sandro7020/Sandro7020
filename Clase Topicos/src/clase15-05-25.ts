const sumar = (a: number, b: number): number => a + b; // Funciones lamda: se definen en una sola linea como una variable

// Closures: para crear entornos separados del codigo principal
function createCounter() { 
    let counter = 0;
    return () => {
        return counter++;
    }
}

// Entonces, en el codigo principal...
function pruebaClosure(): void {
    const contador = createCounter();
    
    console.log(contador()); // 0
    console.log(contador()); // 1
}


// Funciones generadoras o reanudables: permiten retornar (o detener) parcialmente con el uso de "yield" el resultado de una funcion para continuarla mas tarde
// Toda funcion generadora en TypeScript ha de tener: IterableIterator<tipo_de_variable>
function* counterReanudable(): IterableIterator<Number> {
    let counter = 0;
    while (counter < 5) yield counter++; // Podria ser un ciclo infinito
    return counter; // Al salir del ciclo que devuela el valor

}

// En el codigo principal...
function pruebaFunGeneradora() {
    let contador = counterReanudable();
    
    for (let i = 0; i < 6; i++) {
        console.log(contador.next()); // Imprime los valores del objeto retornado: {value: _valor_, done: _si termino o no la funcion_}
    }
}

// Programacion genérica: no hace falta declarar QUÉ tipo de dato estoy utilizando
function find<T>(value: T, arr: T[]): T {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return arr[i];        
    }
    return null;
}

function pruebaFunGenerica() {
    const juegos = ["DMC", "GTA", "TLoZ", "Mario"];
    console.log(find("GTA", juegos));
    console.log(find("Sonic", juegos));
    

    const numeros = [2, 5, 10, 3, 1];
    console.log(find(10, numeros));
    console.log(find(21, numeros));
}

// 0 1 1 2 3 5 8 13 21 ...
// Una funcion generadora y un closure para que cada vez que hagas una llamada devuelva la siguiente iteracion de la serie de Fibonacci

// FUNCION CLOSURE
function valorFibonacci() {
    let valor_anterior_1: number = 0
    let valor_anterior_2: number = 1
    return () => {
        const aux: number = valor_anterior_1;
        valor_anterior_1 = valor_anterior_2
        valor_anterior_2 = aux + valor_anterior_2;
        return valor_anterior_1;
    }
}

// FUNCION GENERADORA
function* secuenciaFibonacci(): IterableIterator<Number> {
    const valor_actual = valorFibonacci();
    while (true) yield valor_actual();
}

// FUNCION GENERADORA INDIVIDUAL
function* fibonacciGeneradora(): IterableIterator<Number> {
    let valor_anterior_1 = 0;
    let valor_anterior_2 = 1;
    while (true) {
        const aux: number = valor_anterior_1;
        valor_anterior_1 = valor_anterior_2
        valor_anterior_2 = aux + valor_anterior_2;
        yield valor_anterior_1;
    }
}

function main(n: number) {
    console.log("Secuencia Fibonacci con closure Y generadora:");
    const fibonacci1 = secuenciaFibonacci();
    for (let i = 0; i < n; i++) {
        console.log(fibonacci1.next()["value"]);
    }
    console.log();
    console.log("Secuencia Fibonacci con closure:");
    const fibonacci2 = valorFibonacci();
    for (let i = 0; i < n; i++) {
        console.log(fibonacci2());
    }

    console.log();
    console.log("Secuencia Fibonacci con generadora:");
    const fibonacci3 = fibonacciGeneradora();
    for (let i = 0; i < n; i++) {
        console.log(fibonacci3.next()["value"]);
    }
}

main(8);