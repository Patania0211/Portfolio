function narcissistic(value) {
  // Code me to return true or false
  if (Number.isInteger(value)){
    // Puts the number in an array
    valueInArray = String(value).split("").map((value) =>{return Number(value);})
    let arrayOfValuesAtPow = [];

    for (let i = 0; i<valueInArray.length; i++)
    {
      // Exposant
      let numberOfDigits = valueInArray.length;
      // Calcul
      let valueAtPow = Math.pow(valueInArray[i], numberOfDigits);
      arrayOfValuesAtPow.push(valueAtPow);
      Number(valueAtPow);
    }

    // Summing the array
    const initalValue = 0;
    const sumWithInitial = arrayOfValuesAtPow.reduce((accumulator, currentValue) => accumulator + currentValue, initalValue);
    return value === sumWithInitial

    ;} 
  return 'Pas un nombre entier positif'
  }
