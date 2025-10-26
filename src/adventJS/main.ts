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

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'));
// ➞ "sleighDesign.png"

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'));
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'));
// ➞ "elf-roster.csv"