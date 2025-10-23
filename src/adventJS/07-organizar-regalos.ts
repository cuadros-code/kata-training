/**
  ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. 
  Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

  Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. 
  Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

  Recibirás un string que contiene letras y paréntesis.
  Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
  Si hay paréntesis anidados, resuelve primero los más internos.
  Devuelve el string resultante con los paréntesis eliminados, 
  pero con el contenido volteado correctamente.
  Nos ha dejado algunos ejemplos:

 */

export function fixPackages(packages: string): string {
  let core = '';
  let index = -1;
  let list: string[] = []
  let temp = '';

  if(packages == '()' || packages == ''){
    return ''
  }
  
  for(let i = 0; i < packages.length; i++) {
    const str = packages[i]

    if(str == '(') {
      index += 1;
      continue;
    }
    
    if(str == ')') {
      temp = list[index]?.split('')?.reverse()?.join('') ?? ""
      index -= 1;
      if( index == -1 ) {
        core += temp;
        list = []
      } else {
        list[index] = list[index] ? list[index].concat(temp) : str;
      }
      continue;
    }
    
    if(index > -1) {
      list[index] = list[index] ? list[index]?.concat(str) : str;
    }
    
    if(index == -1) {
      core += str;
    }
  }

  return core
}