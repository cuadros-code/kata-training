/**
  Santa Claus 🎅 está revisando una lista de juguetes únicos 
  que podría incluir en su bolsa mágica de regalos. Quiere explorar 
  todas las combinaciones posibles de juguetes. Quiere ver todas 
  las combinaciones que realmente contengan al menos un juguete.

  Tu tarea es escribir una función que, dado un array de juguetes, 
  devuelva todas las combinaciones posibles.

  Importante: Debes devolverlo en el orden que aparecen 
  los juguetes y de combinaciones de 1 a n juguetes.
 */

export function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = [];
  
  function backtrack(index: number, currentSet: string[]) {
    if (index === gifts.length) {
      currentSet.length && result.push([...currentSet]);
      return;
    }
    
    currentSet.push(gifts[index]);
    backtrack(index + 1, currentSet);
    currentSet.pop();
    
    backtrack(index + 1, currentSet);
  }
  
  backtrack(0, []);
  return result.sort( (a, b) => a.length - b.length );
}