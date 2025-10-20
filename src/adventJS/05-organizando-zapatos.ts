/**
  Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. 
  Cada bota se describe por dos valores:

   - type indica si es una bota izquierda (I) o derecha (R).
   - size indica el tamaño de la bota.

  Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan 
  izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

  ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

  Ejemplo:
  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]

  organizeShoes(shoes)
  // [38, 42]
 */

type Shoe = {
  type: 'I' | 'R'
  size: number
}

// {
//   38: { I: 2, R: 1 },
//   42: { I: 1, R: 1 }
// }

export function organizeShoes(shoes: Shoe[]): number[] {
  const result: any[] = []

  const data =shoes.reduce((acc, el) => {
    acc[el.size] ??= {}
    acc[el.size][el.type] = (acc[el.size][el.type] ?? 0) + 1
    return acc
  }, {} as any) 

  for (const [key, value] of Object.entries(data) as [string, any][]) {
    let min =  Math.min(...[value['I'], value['R']])
    for (let i = 0; i < min; i++) {
      let data: any = {
        size: key,
        pair: min
      }
      result.push(data);
    }
    
  }

  return result.map(e => Number(e.size))

  // const counts = shoes.reduce((acc, { type, size }) => {
  //   acc[size] ??= { I: 0, R: 0 };
  //   acc[size][type]++;
  //   return acc;
  // }, {} as any);


  // const pairs = Object.entries(counts).flatMap(([size, { I, R }]) => {
  //   const min = Math.min(I, R);
  //   return Array(min).fill(+size);
  // });

  // return pairs
}