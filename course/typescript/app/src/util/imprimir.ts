import { Imprimivel } from "../interfaces/imprimivel";

export function imprimir(...objects: Imprimivel[]){
    objects.forEach((element) => { console.log(element.toString());});
}