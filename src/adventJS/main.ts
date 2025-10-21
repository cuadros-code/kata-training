import { prepareGifts } from "./01-regalo-repetido";
import { createFrame } from "./02-enmarcando-nombres";
import { organizeInventory } from "./03-organizando-inventario";
import { createXmasTree } from "./04-decorando-arbol-navidad";
import { organizeShoes } from "./05-organizando-zapatos";
import { inBox } from "./06-dentro-de-caja";

// console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5]))

// console.log(createFrame(['midu', 'madeval', 'educalvolpz']))

// const inventory = [
//   { name: 'car', quantity: 3, category: 'toys' },
//   { name: 'car', quantity: 2, category: 'toys' },
//   { name: 'ball', quantity: 2, category: 'sports' },
//   { name: 'doll', quantity: 5, category: 'toys' },
//   { name: 'racket', quantity: 4, category: 'sports' }
// ]
// console.log(organizeInventory(inventory))

// console.log(createXmasTree(5, '+'))

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


console.log(inBox([
  "###",
  "#*#",
  "###"
]))

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]))

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#####"
]))

// true, false, false