/**
  Instrucciones
  Resultados
  Medio
  Los elfos están jugando con un tren 🚂 mágico que transporta regalos. 
  Este tren se mueve en un tablero representado por un array de strings.

  El tren está compuesto por una locomotora (@), seguida de sus vagones (o), 
  y debe recoger frutas mágicas (*) que le sirve de combustible. 
  El movimiento del tren sigue las siguientes reglas:

  Recibirás dos parámetros board y mov.

  board es un array de strings que representa el tablero:

  @ es la locomotora del tren.
  o son los vagones del tren.
  * es una fruta mágica.
  · son espacios vacíos.
  mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

  'L': izquierda
  'R': derecha
  'U': arriba
  'D': abajo.
  Con esta información, debes devolver una cadena de texto:

  'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
  'eat': Si el tren recoge una fruta mágica (*).
  'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
  
  Ejemplo:

  const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
  ]

  console.log(moveTrain(board, 'U'))
  // ➞ 'eat'
  // Porque el tren se mueve hacia arriba y encuentra una fruta mágica

  console.log(moveTrain(board, 'D'))
  // ➞ 'crash'
  // El tren se mueve hacia abajo y la cabeza se choca consigo mismo

  console.log(moveTrain(board, 'L'))
  // ➞ 'crash'
  // El tren se mueve a la izquierda y se choca contra la pared

  console.log(moveTrain(board, 'R'))
  // ➞ 'none'
  // El tren se mueve hacia derecha y hay un espacio vacío en la derecha
 */

type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

export function moveTrain(board: Board, mov: Movement): Result {
  const headPosition = { index: 0, line: 0 }
  const actions: any = {
    '*'       : 'eat',
    'o'       : 'crash',
    '·'       : 'none',
    undefined : 'crash'
  }

  const moves: any = {
    U: { line: -1, index: 0 },
    D: { line: 1, index: 0 },
    L: { line: 0, index: -1 },
    R: { line: 0, index: 1 }
  };


  for(let i = 0; i < board.length; i++) {
    const headIndex = board[i].indexOf('@')
    if( headIndex > -1 ) {
      headPosition.line = i;
      headPosition.index = headIndex;
    }
  }

  const getLine = (index: number) => board[index];
  const getItem = (line: string, index: number) => line[index];

  function moveHead(mov: any, headPosition: any) {
    const delta = moves[mov];
    if (!delta) return 'none';

    const line = getLine(headPosition.line + delta.line);
    if (!line) return 'crash';

    const item = getItem(line, headPosition.index + delta.index);
    return actions[item];
  }

  return moveHead(mov, headPosition)
  // if( mov == 'U' ) {
  //   const line = getLine(headPosition.line - 1)
  //   if( !line ) return 'crash';
  //   const item = getItem(line, headPosition.index);
  //   return actions[item]
  // }

  // if( mov == 'D' ) {
  //   const line = getLine(headPosition.line + 1)
  //   if( !line ) return 'crash';
  //   const item = getItem(line, headPosition.index);
  //   return actions[item]
  // }

  // if( mov == 'L' ) {
  //   const line = getLine(headPosition.line)
  //   if( !line ) return 'crash';
  //   const item = getItem(line, headPosition.index - 1);
  //   return actions[item]
  // }

  // if( mov == 'R' ) {
  //   const line = getLine(headPosition.line)
  //   if( !line ) return 'crash';
  //   const item = getItem(line, headPosition.index + 1);
  //   return actions[item]
  // }

  // return 'none';
}
