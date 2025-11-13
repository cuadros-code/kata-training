/**
 Los elfos están trabajando en un sistema para verificar las listas de 
 regalos de los niños 👧👦. Sin embargo, ¡algunas listas están incompletas y faltan números!

  Tu tarea es escribir una función que, dado un array de números, 
  encuentre todos los números que faltan entre 1 y n (donde n es el tamaño del array o el número más alto del array).

  Eso sí, ten en cuenta que:

  - Los números pueden aparecer más de una vez y otros pueden faltar
  - El array siempre contiene números enteros positivos
  - Siempre se empieza a contar desde el 1
 */

export function findMissingNumbers(nums: number[]): number[] {
  const max = Math.max(...nums)
  const missing: number[] = []
  for (let i = 1; i < max; i++) {
    if( !nums.includes(i) ) {
      missing.push(i)
    }
  }
  return missing
}