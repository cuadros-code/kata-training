import { organizeInventory } from "./organizando-inventario";

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
const inventory = [
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory))