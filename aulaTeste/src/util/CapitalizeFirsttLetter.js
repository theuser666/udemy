/*
Deixa a primeira letra em maíusculo 
*/

const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)
  }

  export default capitalizeFirstLetter;