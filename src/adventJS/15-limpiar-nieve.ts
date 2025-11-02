/**
Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. 
Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos 
y adyacentes se encuentran, desaparecen automáticamente.

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. 
El camino se representa por una cadena de texto y cada montículo de nieve un carácter.

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.

El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:
*/


export function removeSnow(s: string): string {
  let changed = true;

  while (changed) {
    changed = false;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
        s = s.slice(0, i) + s.slice(i + 2);
        changed = true;
        break;
      }
    }
    
  }

  return s;
}
