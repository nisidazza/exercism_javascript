//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (resistorColors) => {
  let colorsArray = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']
  let colorIndexOne = colorsArray.indexOf(resistorColors[0])
  let colorIndexTwo = colorsArray.indexOf(resistorColors[1])
  let result = (colorIndexOne*10)+colorIndexTwo
  return result
};

decodedValue(['brown', 'black'])
