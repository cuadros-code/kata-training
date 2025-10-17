/**

  Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. 
  Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. 
  Necesitas ayudar a Santa a organizar el inventario.

  Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

  name: el nombre del juguete (string).
  quantity: la cantidad disponible de ese juguete (entero).
  category: la categoría a la que pertenece el juguete (string).
  Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

  Las claves del objeto serán las categorías de juguetes.
  Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades
  totales de cada juguete en esa categoría.
  Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
  Si el array está vacío, la función debe devolver un objeto vacío {}.

  const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]

  organizeInventory(inventory2)

  // Resultado esperado:
  // {
  //   education: {
  //     book: 15
  //   },
  //   art: {
  //     paint: 3
  //   }
  // }

 */

interface Inventory { 
  name: string, 
  quantity: number, 
  category: string 
}

export function organizeInventory(inventory: Inventory[]): object {

  const result = inventory.reduce((acc, el) => {
    const category = el.category;
    const name = el.name;
    let temp: any = {}

    if( !acc[category] ){
      temp[name] = el.quantity
      acc[category] = temp
    } else {
      if( !acc[category][name] ) {
        acc[category][name] = el.quantity;
      } else {
        acc[category][name] = acc[category][name] + el.quantity;
      }
    }
    return acc;
  }, {} as any)

  // const result: any {}
  // 
  // const data = inventory.reduce((acc, el) => {
  //   const category = el.category;
  //   if(!acc[category]) { 
  //     acc[category] = [];
  //   }
  //   acc[category].push(el)
  //   return acc
  // }, {} as any)

  // categories.map((el: any) => {
  //   const temp = data[el].reduce((acc: any, ele: any) => {
  //     if( !acc[ele.name] ) {
  //       acc[ele.name] = ele.quantity;
  //     } else {
  //       acc[ele.name] = acc[ele.name] + ele.quantity;
  //     }
  //     return acc;
  //   }, {} as any)
  //   result[el] = temp;
  // })

  // const result = inventory.reduce<Record<string, Record<string, number>>>((acc, { name, quantity, category }) => {
  //   acc[category] ??= {}; // inicializa el objeto de categoría si no existe
  //   acc[category][name] = (acc[category][name] ?? 0) + quantity; // suma la cantidad
  //   return acc;
  // }, {});

  return result
}