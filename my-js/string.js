// string reverse with palindrome
// var str1 = "rajar"
// var str2 = ""
// for(var i = str1.length - 1 ; i >= 0 ; i--){
//   str2 += str1[i]
// }
// function isPalindrome(str1, str2){
//   if(str1 == str2){
//     return true
//   }
//   return false
// }
// console.log("is palindrom = ",isPalindrome(str1,str2))



//highest occurance of character
// var str = "anu webkorps and"
// var occuranceCount = []
// var arrayOfObjects = [] 
// for(var i = 0 ; i < str.length ; i++){
//   if (checkCharacterCount(str[i])){
//     count = 0
//     for(var j = 0 ; j < str.length ; j++)
//     {
//       if(str[i] == str[j]){
//         count++
//       }
//     }
//     arrayOfObjects.push({"character": str[i], "count": count});
//   }
// }

// function checkCharacterCount(char){
//   if(occuranceCount.indexOf(char) == -1 && char != ' '){
//     occuranceCount.push(char)
//     return true
//   }
//   return false
// }

// function checkMaxCharCount(arrayOfObjects){
//   var max = 0
//   var maxCharobj = {}
//   arrayOfObjects.forEach(element => {
//     if (element.count > max){
//       max = element.count
//       maxCharobj = element
//     }
//   });
//   console.log(maxCharobj)
// }

// checkMaxCharCount(arrayOfObjects)