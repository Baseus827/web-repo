var usrlang = navigator.language 
|| navigator.userLanguage;
console.log(
"User's preferred language is: "
+ usrlang);

if (usrlang == "tr") {
console.log(true)
}
else{
console.log(false)
}