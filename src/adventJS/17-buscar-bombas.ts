/**
  El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 
  💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden 
  inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen 
  carbón explosivo (true) y otras están vacías (false).

  Los duendes necesitan tu ayuda para mapear las zonas peligrosas.  
  Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo 
  hay en las posiciones adyacentes, incluidas las diagonales.

 */
export function detectBombs(grid: boolean[][]): number[][] {
  let result: number[][] = [];

  const isBomb = (exist: boolean) =>  exist ? 1 : 0
  
  for (let i = 0; i < grid.length; i++) {
    const element = grid[i];
    let position: number[] = []

    for (let j = 0; j < element.length; j++) {
      let boobs = 0;
      const prevRow = grid[i - 1];
      const currentRow = element 
      const nextRow = grid[i + 1];

      if( prevRow && i > 0) {
        boobs += isBomb(prevRow[j - 1])
        boobs += isBomb(prevRow[j])
        boobs += isBomb(prevRow[j + 1])
      }

      boobs += isBomb(currentRow[j - 1])
      boobs += isBomb(currentRow[j + 1])

      if( nextRow && i < grid.length) {
        boobs += isBomb(nextRow[j - 1])
        boobs += isBomb(nextRow[j])
        boobs += isBomb(nextRow[j + 1])
      }
      position.push(boobs)
    }

    result.push(position)
  }

  return result;
}