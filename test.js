var myStr = "Hello everybody lets test replace.";

var newString1 = myStr.replace("everybody", "sandwiches");

console.log(newString1);

var newString2 = newString1.replace(/es/, "BYE");

console.log(newString2);

var word = "test"

var newString3 = newString2.replace(/ReGeX + word + ReGeX/, "play with");
console.log(newString3);