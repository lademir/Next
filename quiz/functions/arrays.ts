export function embaralhar(elementos: any[]): any[] {
    return elementos
        .map(n => ({valor: n, aleatorio: Math.random()})) //cria um par com o valor e um aleatorio
        .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio) //ordena pelo aleatorio
        .map(obj => obj.valor) //desfaz o par
}