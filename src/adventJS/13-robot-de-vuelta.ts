/**
  Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a 
  Papá Noel a distribuir regalos dentro de un gran almacén. 
  El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

  Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

  Las órdenes básicas del robot son:

  L: Mover hacia la izquierda
  R: Mover hacia la derecha
  U: Mover hacia arriba
  D: Mover hacia abajo
  Pero también tiene ciertos modificadores para los movimientos:

  *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
  !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
  ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
  Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. 
  Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que 
  se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

  Debes devolver:

  true: si el robot vuelve a estar justo donde empezó
  [x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo

  // Ejemplos paso a paso:
  isRobotBack('R!U?U') // [1,0]
  // 'R'  -> se mueve a la derecha 
  // '!U' -> se invierte y se convierte en 'D'
  // '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

  isRobotBack('UU!U?D') // [0,1]
  // 'U'  -> se mueve arriba
  // 'U'  -> se mueve arriba
  // '!U' -> se invierte y se convierte en 'D'
  // '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'

 */

export function isRobotBack(moves: string): true | [number, number] {

  const result: [number, number] = [0, 0];
  const savedMoves: string[] = []
  let multipliX2 = 1
  
  const reverseMoves: Record<string, string> = {
    'L' : 'R', 'R' : 'L', 'U' : 'D', 'D' : 'U',
  }

  const move: Record<string, number> = {
    'L' : -1, 'R' : 1, 'U' : 1, 'D' : -1,
  }

  for (let i = 0; i < moves.length; i++) {
    let element = moves[i];

    if( moves[i - 1] == '*' ) {
      multipliX2 = 2;
    }
    if( moves[i - 1] == '!' ) {
      element = reverseMoves[element]
    }
    if( moves[i - 1] == '?' ) {
      if ( savedMoves.includes(element) ) {
        continue
      }
    }

    savedMoves.push(element)

    if( element == 'R' ) {
      result[0] = result[0] + (move[element] * multipliX2);
    }

    if( element == 'L' ) {
      result[0] = result[0] - (move[element] * -1);
    }

    if( element == 'U' ) {
      result[1] = result[1] + (move[element] * multipliX2);
    }

    if( element == 'D' ) {
      result[1] = result[1] - (move[element] * -1);
    }
    multipliX2 = 1;
  }

  if( result[0] == 0 && result[1] == 0 ) return true;

  return result;
}