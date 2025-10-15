/**
Instrucciones
Resultados
Fácil
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:
*/

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  let newList = ['', ...names, '']
  let count = 0;
  let result = [];
  names.forEach( n => { 
    if( n.length > count) { 
      count = n.length
    }
  })
  
  for(let j = 0; j < newList.length; j++) {
    if(newList[j] == ''){
      result.push("*".repeat(count + 4))
    } else {
      result.push("* " + newList[j] + " ".repeat(count - newList[j].length) + " *") 
    }
  }
  
  return result.join("\n")
}
