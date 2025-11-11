import { prepareGifts } from "./01-regalo-repetido";
import { createFrame } from "./02-enmarcando-nombres";
import { organizeInventory } from "./03-organizando-inventario";
import { createXmasTree } from "./04-decorando-arbol-navidad";
import { organizeShoes } from "./05-organizando-zapatos";
import { inBox } from "./06-dentro-de-caja";
import { fixPackages } from "./07-organizar-regalos";
import { drawRace } from "./08-carrera-de-renos";
import { moveTrain } from "./09-tren-magico";
import { compile } from "./10-ensamblador-elfico";
import { decodeFilename } from "./11-nombres-codificados";
import { calculatePrice } from "./12-costo-arbol";
import { isRobotBack } from "./13-robot-de-vuelta";
import { minMovesToStables } from "./14-acomodando-renos";
import { drawTable } from "./15-dibujando-tablas";
import { removeSnow } from "./16-limpiar-nieve";
import { detectBombs } from "./17-buscar-bombas";
import { findInAgenda } from "./18-agenda-magica";
import { distributeWeight } from "./19-apila-cajas";
import { fixGiftList } from "./20-regalos-faltantes-duplicados";
import { treeHeight } from "./21-calcula-altura-arbol";

// # 1
// console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5]))

/**----------------------------------------------------------------------- */

// # 2
// console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

/**----------------------------------------------------------------------- */

// # 3
// const inventory = [
//   { name: 'car', quantity: 3, category: 'toys' },
//   { name: 'car', quantity: 2, category: 'toys' },
//   { name: 'ball', quantity: 2, category: 'sports' },
//   { name: 'doll', quantity: 5, category: 'toys' },
//   { name: 'racket', quantity: 4, category: 'sports' }
// ]
// console.log(organizeInventory(inventory))

/**----------------------------------------------------------------------- */

// # 4
// console.log(createXmasTree(5, '+'))

/**----------------------------------------------------------------------- */

// # 5
// const shoes: any = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 }
// ]
// [38, 38]
// console.log(organizeShoes(shoes))

// const shoes2: any = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'R', size: 42 },
//   { type: 'I', size: 41 },
//   { type: 'I', size: 42 }
// ]
// [38, 42]
// console.log(organizeShoes(shoes2))

/**----------------------------------------------------------------------- */

// # 6
// console.log(inBox([
//   "###",
//   "#*#",
//   "###"
// ]))

// console.log(inBox([
//   "#####",
//   "#   #",
//   "#  #*",
//   "#####"
// ]))

// console.log(inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#####"
// ]))

/**----------------------------------------------------------------------- */

// # 7
// console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

// console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

// console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

// console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

// console.log(fixPackages('a(b(c))e'))


// console.log(fixPackages('abc(def(gh(tn)i)jk)l'))

// console.log(fixPackages('abc(de(ghi(jk(lm)n)lo)pq)z'))

/**----------------------------------------------------------------------- */

// # 8
// console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/


// console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

// console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/

/**----------------------------------------------------------------------- */

// # 9
  // const board = [
  //   '·····',
  //   '*····',
  //   '@····',
  //   'o····',
  //   'o····'
  // ]

  // console.log(moveTrain(board, 'U'))
  // ➞ 'eat'
  // Porque el tren se mueve hacia arriba y encuentra una fruta mágica

  // console.log(moveTrain(board, 'D'))
  // ➞ 'crash'
  // El tren se mueve hacia abajo y la cabeza se choca consigo mismo

  // console.log(moveTrain(board, 'L'))
  // ➞ 'crash'
  // El tren se mueve a la izquierda y se choca contra la pared

  // console.log(moveTrain(board, 'R'))
  // ➞ 'none'
  // El tren se mueve hacia derecha y hay un espacio vacío en la derecha

/**----------------------------------------------------------------------- */

// # 10
// const instructions = [
  // 'MOV -1 C', // copia -1 al registro 'C',
  // 'INC C', // incrementa el valor del registro 'C'
  // 'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  // 'MOV C A', // copia el registro 'C' al registro 'a',
  // 'INC A' // incrementa el valor del registro 'a'
// ]

// console.log( compile(instructions) );

/**----------------------------------------------------------------------- */

// # 11

// console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'));
// ➞ "sleighDesign.png"

// console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'));
// ➞ "chimney_dimensions.pdf"

// console.log(decodeFilename('987654321_elf-roster.csv.tempfile'));
// ➞ "elf-roster.csv"

/**----------------------------------------------------------------------- */

// # 12

// console.log(calculatePrice('***')) // 3   (1 + 1 + 1)
// console.log(calculatePrice('*o')) // 4   (5 - 1)
// console.log(calculatePrice('o*')) // 6   (5 + 1)
// console.log(calculatePrice('*o*')) // 5  (-1 + 5 + 1) 
// console.log(calculatePrice('**o*')) // 6  (1 - 1 + 5 + 1) 
// console.log(calculatePrice('o***')) // 8   (5 + 3)
// console.log(calculatePrice('*o@')) // 94  (-5 - 1 + 100)
// console.log(calculatePrice('*#')) // 49  (-1 + 50)
// console.log(calculatePrice('@@@')) // 300 (100 + 100 + 100)
// console.log(calculatePrice('#@')) // 50  (-50 + 100)
// console.log(calculatePrice('#@Z')) // undefined (Z es desconocido)

/**----------------------------------------------------------------------- */

// # 13

// console.log(isRobotBack('R'))     // [1, 0]
// console.log(isRobotBack('RL'))    // true
// console.log(isRobotBack('RLUD'))  // true
// console.log(isRobotBack('*RU'))   // [2, 1]
// console.log(isRobotBack('R*U'))   // [1, 2]
// console.log(isRobotBack('LLL!R')) // [-4, 0]
// console.log(isRobotBack('R?R'))   // [1, 0]
// console.log(isRobotBack('U?D'))   // true
// console.log(isRobotBack('R!L'))   // [2,0]
// console.log(isRobotBack('U!D'))   // [0,2]
// console.log(isRobotBack('R?L'))   // true
// console.log(isRobotBack('U?U'))   // [0,1]
// console.log(isRobotBack('*U?U'))  // [0,2]
// console.log(isRobotBack('U?D?U')) // true

/**----------------------------------------------------------------------- */

// # 14

// console.log(minMovesToStables([2, 6, 9], [3, 8, 5]))
// 3

// console.log(minMovesToStables([1, 1, 3], [1, 8, 4]))
// 8

/**----------------------------------------------------------------------- */

// # 15

// console.log(
//   drawTable([
//     { name: 'Alice', city: 'London' },
//     { name: 'Bob', city: 'Paris' },
//     { name: 'Charlie', city: 'New York' }
//   ])
// )
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

// console.log(
//   drawTable([
//     { gift: 'Doll', quantity: 10 },
//     { gift: 'Book', quantity: 5 },
//     { gift: 'Music CD', quantity: 12 }
//   ])
// )
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

/**----------------------------------------------------------------------- */

// # 16

// console.log(removeSnow('zxxzoz') ) // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

// console.log(removeSnow('abcdd')) // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

// console.log(removeSnow('zzz')) // -> "z"
// 1. Eliminamos "zz", quedando "z"

// console.log(removeSnow('a')) // -> "a"
// No hay montículos repetidos


/**----------------------------------------------------------------------- */

// # 17

// console.log(detectBombs([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]))
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

// console.log(detectBombs([
//   [true, false],
//   [false, false]
// ]))
// [
//   [0, 1],
//   [1, 1]
// ]

// console.log(detectBombs([
//   [true, true],
//   [false, false],
//   [true, true]
// ]))

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]

/**----------------------------------------------------------------------- */

// # 18

// const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
// Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
// <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

// console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

// console.log(findInAgenda(agenda, '600-987'))
// // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

// console.log(findInAgenda(agenda, '111'))
// // // null
// // // Explicación: No hay resultados

// console.log(findInAgenda(agenda, '1'))
// null
// Explicación: Demasiados resultados


/**----------------------------------------------------------------------- */

// # 19

// console.log(distributeWeight(1))
// Devuelve:
//  _
// |_|

// console.log(distributeWeight(2))
// Devuelve:
//  ___
// |___|

// console.log(distributeWeight(3))
// Devuelve:
//  _
// |_|_
// |___|

// console.log(distributeWeight(4))
// Devuelve:
//  ___
// |___|
// |___|

// console.log(distributeWeight(5))
// Devuelve:
//  _____
// |     |
// |_____|

// console.log(distributeWeight(6))
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

/**----------------------------------------------------------------------- */

// # 20

// console.log(JSON.stringify(fixGiftList(
//   ['puzzle', 'car', 'doll', 'car'], 
//   ['car', 'puzzle', 'doll', 'ball']
// )))
// // Devuelve:
// // {
// //   missing: { ball: 1 },
// //   extra: { car: 1 }
// // }

// console.log(JSON.stringify(fixGiftList(
//   ['book', 'train', 'kite', 'train'],
//   ['train', 'book', 'kite', 'ball', 'kite']
// )))
// // Devuelve:
// // {
// //   missing: { ball: 1, kite: 1 },
// //   extra: { train: 1 }
// // }

// console.log(JSON.stringify(fixGiftList(
//   ['bear', 'bear', 'car'],
//   ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
// )))
// // Devuelve:
// // {
// //   missing: { puzzle: 1, car: 2 },
// //   extra: {}
// // }

// console.log(JSON.stringify(fixGiftList(
//   ['bear', 'bear', 'car'], 
//   ['car', 'bear', 'bear']
// )))
// // Devuelve:
// // {
// //   missing: {},
// //   extra: {}
// // }

// console.log(JSON.stringify(fixGiftList(
//   ['car', 'car'],               // received
//   ['car', 'car', 'train']       // expected
// )))
// // Esperado:
// // { missing: { train: 1 }, extra: {} }

// console.log(JSON.stringify(fixGiftList(
//   ['car', 'robot'],     // received
//   ['train', 'puzzle']   // expected
// )))
// Esperado:
// { missing: { train: 1, puzzle: 1 }, extra: { car: 1, robot: 1 } }

/**----------------------------------------------------------------------- */

// # 20

// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌


console.log(treeHeight(tree))
// Devuelve: 3


const tree_1  = {
  value: '🎄',
  left: {
    value: '⭐',
    left: null,
    right: null
  },
  right: {
    value: '🎅',
    left: null,
    right: null
  }
}

console.log(treeHeight(tree_1))
// 2