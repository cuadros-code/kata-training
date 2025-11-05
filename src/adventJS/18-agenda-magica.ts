/* 
Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de 
los niños para entregar los regalos. El problema: la información de la 
agenda está mezclada y malformateada. Las líneas contienen un número 
]de teléfono mágico, el nombre de un niño y su dirección, pero todo 
está rodeado de caracteres extraños.

Santa necesita tu ayuda para encontrar información específica de la agenda. 
Escribe una función que, dado el contenido de la agenda y un número de teléfono, 
devuelva el nombre del niño y su dirección.

Ten en cuenta que en la agenda:

Los números de teléfono están formateados como +X-YYY-YYY-YYY 
(donde X es uno o dos dígitos, e Y es un dígito).
El nombre de cada niño está siempre entre < y >
La idea es que escribas una funcióna que, pasándole el teléfono 
completo o una parte, devuelva el nombre y dirección del niño. 
Si no encuentra nada o hay más de un resultado, debes devolver null.
*/

export function findInAgenda(agenda: string, phone: string):  { name: string; address: string } | null {
  let split = agenda.split('\n');

  for (let i = 0; i < split.length; i++) {
    const element = split[i];

    const matches = split.filter(line => line.includes(phone));

    if (matches.length === 0) return null;
    if (matches.length > 1) return null;
    
    if( element.includes(phone) && phone.length >= 5) {
      const startIndexName = element.indexOf('<') + 1;
      const endIndexName = element.indexOf('>');

      const name = element.substring(startIndexName, endIndexName);

      if(!name) return null

      const addressAndPhone = element.substring(0, startIndexName - 1) 
      + element.substring(endIndexName + 1);

      const address = addressAndPhone.replaceAll('-', '').replace(/\+\d+/g, '').trim();
      if(!address) return null

      return {
        name,
        address
      }
    }
  }
  
  return null
}
