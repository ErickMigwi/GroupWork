let reversedArr = []
let reversingArr = (arr)=>{
     for(let i = arr.length; i>=0; i--){
          reversedArr.push(arr[i])
     }
     return reversedArr
}
console.log(reversingArr(splicedItem));

// Higest and lowest numbers inside an array
let lowestValue = Math.min(... splicedItem)
let highestValue = Math.max(... splicedItem)
console.log("this is the highest value:",highestValue, "this is the lowest value",lowestValue);

let Item = [1,-3,5,5,-6,7,7,-8]
let ng=[]
let negativeElements= (element)=>{
     for(let i= 0; i<element.length; i++){
          if(element[i]> 5){
              ng.push(element[i])
          }
     }
     return ng
}
console.log( negativeElements(Item));
function findPalindrom(str){
     let rts = str.split("").reverse().join("")
     if (rts===str){
          return "This is a palindrome", true
     }
     else{
          return "This is a palindrome", false
     }

}
console.log(findPalindrom("madam"));
let findPalindromNum = (num)=>{
     let mun = parseInt(num.toString().split("").reverse().join(""))
     if(mun===num){
          return "This is a palindrome"
     }
     else{
          return "This is not a palindrome number"
     }

}
console.log(findPalindromNum(77));