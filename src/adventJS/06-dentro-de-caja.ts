/**
  Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, 
  representado por un asterisco *, está dentro de la caja.

  La caja tiene un regalo (*) y cuenta como dentro de la caja si:

  Está rodeada por # en los bordes de la caja.
  El * no está en los bordes de la caja.
  Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. 
  Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

  Ejemplos:

  inBox([
    "###",
    "#*#",
    "###"
  ]) // ➞ true

  inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ]) // ➞ true

  inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ]) // ➞ false
  */

export function inBox(box: string[]): boolean { 
  for (let i = 0; i < box.length; i++) {
    const str = box[i];
    if(
      str.includes('*') && i == 0 || str.includes('*') && i == box.length - 1 
      || str.startsWith('*') 
      || str.endsWith('*') 
      || !box.join('').includes("*")
    ) {
      return false
    }
  }
  return true
}
