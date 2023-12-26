export function escape(){

    return function(target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor){

            const metodoOriginal = descriptor.value;
            descriptor.value = function(...args: any[]){
             let retorno = metodoOriginal.apply(this, args);
             return retorno;
            }


            return descriptor;
        }
}