/**
  Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. 
  Sin embargo, algunos regalos faltan, otros están duplicados, 
  y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.
  Recibirás dos arrays:

  received: Lista con los regalos que Santa tiene actualmente.
  expected: Lista con los regalos que Santa debería tener.
  Tu tarea es escribir una función que, dado received y expected, 
  devuelva un objeto con dos propiedades:

  missing: Un objeto donde las claves son los nombres de los regalos 
  faltantes y los valores son las cantidades que faltan.

  extra: Un objeto donde las claves son los nombres de los regalos extra 
  o duplicados y los valores son las cantidades que sobran.
  Ten en cuenta que:

  Los regalos pueden repetirse en ambas listas.
  Las listas de regalos están desordenadas.
  Si no hay regalos que falten o sobren, las propiedades correspondientes 
  (missing o extra) deben ser objetos vacíos.
 */

export function fixGiftList(received: string[], expected: string[]): { 
  missing: Record<string, number>, 
  extra: Record<string, number> 
} {
  const resume: any = {
    received: {},
    expected: {}
  }

  const result: any = {
    missing: {},
    extra: {}
  }

  received.forEach( el => {
    const total = received.filter(e => e == el).length
    resume.received[el] = total
  })
  expected.forEach( el => {
    const total = expected.filter(e => e == el).length
    resume.expected[el] = total
  })
  
  const realObj = Object.keys(resume.received).length > Object.keys(resume.expected).length
    ? resume.received
    : resume.expected

  for (const element in realObj) {
    const total = (resume.received[element] ?? 0) - (resume.expected[element] ?? 0)

    if( total == 0 ) continue;

    if( total > 0 ) {
      result.extra[element] = total
      continue;
    }
    if( total < 0) {
      result.missing[element] = Math.abs(total)
      continue;
    }
  }

  return result;
}