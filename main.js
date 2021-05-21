/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function telephoneCheck(str){
  // a través de la función validateFormat se verifica si str es un número de teléfono válido en USA
  return validateFormat(str);
}
function validateNumDigits(str){//validar si la cantidad de digitos del string es igual a 10 o 11
  return str.match(/\d/g).length===10 || str.match(/\d/g).length===11;
}
function countryCodePresentAndValid(str){//validar si el string pasado como parámetro posee el código del país
  return str.match(/\d/g).length===11 && str.match(/\d/g)[0]===1;
}
function validateFormat(str){
  let strNoSpaces=str.replace(/\s/g,"");//elimino los espacios en str
  if(/^\d{10}$/.test(strNoSpaces)){
    return true;
  }
  if(/^\(\d{3}\)\d{7}$/.test(strNoSpaces)){
    return true;
  }
  if(/^\(\d{3}\)\d{3}-\d{4}$/.test(strNoSpaces)){
    return true;
  }
  if(/^\d{3}-\d{7}$/.test(strNoSpaces)){
    return true;
  }
  if(/^\d{3}-\d{3}-\d{4}$/.test(strNoSpaces)){
    return true;
  }
  //-----------------------------11 digits------------------------
  if(/^1\d{10}$/.test(strNoSpaces)){
    return true;
  }
  if(/^1\(\d{3}\)\d{7}$/.test(strNoSpaces)){
    return true;
  }
  if(/^1\(\d{3}\)\d{3}-\d{4}$/.test(strNoSpaces)){
    return true;
  }
  if(/^1\d{3}-\d{7}$/.test(strNoSpaces)){
    return true;
  }
  if(/^1\d{3}-\d{3}-\d{4}$/.test(strNoSpaces)){
    return true;
  }
  return false;
}

console.log("1 555-555-5555 = ",telephoneCheck("1 555-555-5555"));
console.log("1 (555) 555-5555 = ",telephoneCheck("1 (555) 555-5555"));
console.log("5555555555 = ",telephoneCheck("5555555555"));
console.log("555-555-5555 = ",telephoneCheck("555-555-5555"));
console.log("(555)555-5555 = ",telephoneCheck("(555)555-5555"));
console.log("1(555)555-5555 = ",telephoneCheck("1(555)555-5555"));
console.log("555-5555 = ",telephoneCheck("555-5555"));
console.log("5555555 = ",telephoneCheck("5555555"));
console.log("1 555)555-5555 = ",telephoneCheck("1 555)555-5555"));
console.log("1 555 555 5555 = ",telephoneCheck("1 555 555 5555"));
console.log("1 456 789 4444 = ",telephoneCheck("1 456 789 4444"));
console.log("123**&!!asdf# = ",telephoneCheck("123**&!!asdf#"));
console.log("55555555 = ",telephoneCheck("55555555"));
console.log("(6054756961) = ",telephoneCheck("(6054756961)"));
console.log("2 (757) 622-7382 = ",telephoneCheck("2 (757) 622-7382"));
console.log("0 (757) 622-7382 = ",telephoneCheck("0 (757) 622-7382"));
console.log("-1 (757) 622-7382 = ",telephoneCheck("-1 (757) 622-7382"));
console.log("2 757 622-7382 = ",telephoneCheck("2 757 622-7382"));
console.log("10 (757) 622-7382 = ",telephoneCheck("10 (757) 622-7382"));
console.log("27576227382 = ",telephoneCheck("27576227382"));
console.log("(275)76227382 = ",telephoneCheck("(275)76227382"));
console.log("2(757)6227382 = ",telephoneCheck("2(757)6227382"));
console.log("2(757)622-7382 = ",telephoneCheck("2(757)622-7382"));
console.log("555)-555-5555 = ",telephoneCheck("555)-555-5555"));
console.log("(555-555-5555 = ",telephoneCheck("(555-555-5555"));
console.log("(555)5(55?)-5555 = ",telephoneCheck("(555)5(55?)-5555"));
console.log("55 55-55-555-5 = ",telephoneCheck("55 55-55-555-5"));