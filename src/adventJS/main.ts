import { prepareGifts } from "./01-regalo-repetido";
import { createFrame } from "./02-enmarcando-nombres";
import { organizeInventory } from "./03-organizando-inventario";
import { createXmasTree } from "./04-decorando-arbol-navidad";
import { organizeShoes } from "./05-organizando-zapatos";
import { inBox } from "./06-dentro-de-caja";
import { fixPackages } from "./07-organizar-regalos";

// # 1
// console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5]))


// # 2
// console.log(createFrame(['midu', 'madeval', 'educalvolpz']))


// # 3
// const inventory = [
//   { name: 'car', quantity: 3, category: 'toys' },
//   { name: 'car', quantity: 2, category: 'toys' },
//   { name: 'ball', quantity: 2, category: 'sports' },
//   { name: 'doll', quantity: 5, category: 'toys' },
//   { name: 'racket', quantity: 4, category: 'sports' }
// ]
// console.log(organizeInventory(inventory))


// # 4
// console.log(createXmasTree(5, '+'))


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

// # 7
// console.log(fixPackages('a(cb)de'))
//(ab(cd)ef)
console.log(fixPackages(''))
// (ab (cdfe g) h)
// (ab gefdc h)
// hcdfegab
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
