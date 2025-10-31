/**
  Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está 
  trabajando en una aplicación de administración de regalos y niños.

  Para mejorar la presentación, quiere crear una función drawTable 
  que reciba un array de objetos y lo convierta en una tabla de texto.

  La tabla dibujada debe representar los datos del objeto de la siguiente manera:

  Tiene una cabecera con el nombre de la columna.
  El nombre de la columna pone la primera letra en mayúscula.
  Cada fila debe contener los valores de los objetos en el orden correspondiente.
  Cada valor debe estar alineado a la izquierda.
  Los campos dejan siempre un espacio a la izquierda.
  Los campos dejan a la derecha el espacio necesario para alinear la caja.
  Mira el ejemplo para ver cómo debes dibujar la tabla:

 */

export function drawTable(data: Array<Record<string, string | number>>): string {
  // const result: string[] = [];
  // const key1 = Object.keys(data[0])[0];
  // const key2 = Object.keys(data[0])[1];

  // const columName = key1.charAt(0).toUpperCase() + key1.slice(1);
  // const columValue = key2.charAt(0).toUpperCase() + key2.slice(1);

  // const columNameMax = data.map(el =>  el[key1]?.toString().length);
  // const columValueMax = data.map(el => el[key2]?.toString().length);
  // columNameMax.push(key1.length)
  // columValueMax.push(key2.length)

  // const MAX_COUNT_NAME = Math.max(...columNameMax)
  // const MAX_COUNT_VALUE = Math.max(...columValueMax)

  // result.push('+' + '-'.repeat(MAX_COUNT_NAME + 2) + '+' + '-'.repeat(MAX_COUNT_VALUE + 2) + '+')
  // result.push('| ' + columName + ' '.repeat(MAX_COUNT_NAME - columName.length) 
  //   + ' | ' + 
  //   columValue +' '.repeat(MAX_COUNT_VALUE - columValue.length) + ' |'
  // )
  // result.push('+' + '-'.repeat(MAX_COUNT_NAME + 2) + '+' + '-'.repeat(MAX_COUNT_VALUE + 2) + '+')

  // for (let i = 0; i < data.length; i++) {
  //   const element = data[i];
  //   let str = ''

  //   str += '| ' + `${element[key1]}` + ' '.repeat(MAX_COUNT_NAME - element[key1]?.toString().length) 
  //   + ' | ' + 
  //   `${element[key2]}` + ' '.repeat(MAX_COUNT_VALUE - element[key2].toString().length) + ' |'
    
  //   result.push(str)
  // }

  // result.push('+' + '-'.repeat(MAX_COUNT_NAME + 2) + '+' + '-'.repeat(MAX_COUNT_VALUE + 2) + '+')


  // return result.join('\n')

  if (!data.length) return '';

  const keys = Object.keys(data[0]);
  const headers = keys.map(k => k[0].toUpperCase() + k.slice(1));

  const colWidths = keys.map((key, i) =>
    Math.max(headers[i].length, ...data.map(row => row[key].toString().length))
  );

  const border =
    '+' + colWidths.map(w => '-'.repeat(w + 2)).join('+') + '+';

  const formatRow = (values: (string | number)[]) =>
    '| ' +
    values
      .map((v, i) => `${v}${' '.repeat(colWidths[i] - v.toString().length)}`)
      .join(' | ') +
    ' |';

  const rows = [
    border,
    formatRow(headers),
    border,
    ...data.map(row => formatRow(keys.map(k => row[k]))),
    border,
  ];

  return rows.join('\n');
}