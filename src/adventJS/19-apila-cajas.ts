/**
 ¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que 
 transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

  Los regalos se pueden meter en 4 cajas distintas, 
  donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

  Tu misión es que al recibir el peso de los regalos, 
  uses las mínimas cajas posibles y que, además, 
  las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

  Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

  Nota: ¡Ten cuidado con los espacios en blanco! 
  No añadas espacios en blanco a la derecha de una caja si no son necesarios.
*/

const boxRepresentations = {
  1 : [" _ ", "|_|"] ,
  2 : [" ___ ", "|___|"],
  5 : [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
};

export function distributeWeight(weight: number): string {
  let result: string[] = []
  let boxSize: number[] = []

  while (weight > 0) {
    if( weight >= 10 ) {
      weight -= 10;
      boxSize.push(10)
    }
    if( weight >= 5 && weight < 10 ) {
      weight -= 5;
      boxSize.push(5)
    }
    if( weight >= 2 && weight < 5 ) {
      weight -= 2;
      boxSize.push(2)
    }
    if( weight >= 1 && weight < 2 ) {
      weight -= 1;
      boxSize.push(1)
    }
  }

  console.log(boxSize)

  boxSize.sort((a, b) => a - b).forEach((size, index) =>  {
    let box = boxRepresentations[size].join('\n')
    result.push(box)
  })

 return result.join('\n');
}