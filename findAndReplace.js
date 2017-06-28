
function myReplace(str, before, after) {
  
  //var newStr = str.replace(before, after);
  
  //console.log(str);
  
  str = str.split(' ');
  
//   var index = strArray.indexOf(before);
  
//   strArray.splice(index, 1, after);
  str.splice(str.indexOf(before), 1, after);
  
  return str.join(' ');
  
  //console.log(index);
  
  //console.log(strArray);
  
//   return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
