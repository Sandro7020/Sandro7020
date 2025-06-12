// target: parametros al decorador - propertyKey: el nombre de la funcion decorada - descriptor: descripcion
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    console.log("Estoy entrando al decorador");
    console.log(descriptor);
    return descriptor;
}

class Calculator {
    @LogMethod
    public add(a: number, b: number): number {
        console.log("Estoy en el metodo");
        return a + b;
    }
}

const variable = new Calculator;
console.log(variable.add(3, 5));
