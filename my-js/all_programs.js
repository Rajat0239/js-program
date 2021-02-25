//Write a  program to check whether a number is negative, positive or zero.
  // var num = 0;
  // if(num == 0)
  // {
  //   console.log("zero")
  // }
  // else if(num < 0)
  // {
  //   console.log("negative")
  // }
  // else
  // {
  //   console.log("positive")
  // }



//Write a  program to check whether a number is divisible by 5 and 11 or not.
  // var num = 55;
  // (num % 5 == 0 && num % 11==0) ? console.log("number is divisible by 5 and 11") : console.log("number is not divisible by 5 and 11")



//Write a  program to check whether a number is even or odd
  // var num = 11;
  // (num % 2 == 0) ? console.log("number is even") : console.log("number is odd")


//Write a  program to check whether a year is leap year or not
  // var year = 2100
  // if(year % 100 == 0)
  // {
  //   (year % 400 == 0) ? console.log("it is a leap year") : console.log("it is not a leap year")
  // }
  // else
  // {
  //   (year % 4 == 0) ? console.log("it is a leap year") : console.log("it is not a leap year")
  // }


//Write a  program to input any alphabet and check whether it is vowel or consonant
  // var alphabet = 'b'
  // if(alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u')
  // {
  //   console.log("alphabet is a vowel")
  // }
  // else
  // {
  //   console.log("alphabet is a consonant")
  // }


//Write a  program to input week number and print week day
  // var week_number = 7
  // if(week_number == 1)
  // {
  //   console.log("monday")
  // }
  // else if(week_number == 2)
  // {
  //   console.log("tuesday")
  // }
  // else if(week_number == 3)
  // {
  //   console.log("wednesday")
  // }
  // else if(week_number == 4)
  // {
  //   console.log("thursday")
  // }
  // else if(week_number == 5)
  // {
  //   console.log("friday")
  // }
  // else if(week_number == 6)
  // {
  //   console.log("saturday")
  // }
  // else if(week_number == 7)
  // {
  //   console.log("sunday")
  // }
  // else
  // {
  //   console.log("invalid week day")
  // }



//Write a  program to input month number and print number of days in that month
  // var month_number = 2
  // if(month_number == 1)
  // {
  //   console.log("31")
  // }
  // else if(month_number == 2)
  // {
  //   console.log("28")
  // }
  // else if(month_number == 3)
  // {
  //   console.log("31")
  // }
  // else if(month_number == 4)
  // {
  //   console.log("30")
  // }
  // else if(month_number == 5)
  // {
  //   console.log("31")
  // }
  // else if(month_number == 6)
  // {
  //   console.log("30")
  // }
  // else if(month_number == 7)
  // {
  //   console.log("31")
  // }
  // else if(month_number == 8)
  // {
  //   console.log("31")
  // }
  // else if(month_number == 9)
  // {
  //   console.log("30")
  // }
  // else if(month_number == 10)
  // {
  //   console.log("31")
  // }
  // else if(month_number == 11)
  // {
  //   console.log("30")
  // }
  // else if(month_number == 12)
  // {
  //   console.log("31")
  // }
  // else
  // {
  //   console.log("invalid month number")
  // }



//Write a  program to count total number of notes in given amount
  // var amount = 2716;
  // console.log("notes of 2000 = ",Math.floor(amount/2000))
  // amount = amount % 2000;
  // console.log("notes of 500 = ",Math.floor(amount/500))
  // amount = amount % 500;
  // console.log("notes of 200 = ",Math.floor(amount/200))
  // amount = amount % 200;
  // console.log("notes of 100 = ",Math.floor(amount/100))
  // amount = amount % 100;
  // console.log("notes of 50 = ",Math.floor(amount/50))
  // amount = amount % 50;
  // console.log("notes of 20 = ",Math.floor(amount/20))
  // amount = amount % 20;
  // console.log("notes of 10 = ",Math.floor(amount/10))
  // amount = amount % 10;
  // console.log("notes of 5 = ",Math.floor(amount/5))
  // amount = amount % 5;
  // console.log("notes of 2 = ",Math.floor(amount/2))
  // amount = amount % 2;
  // console.log("notes of 1 = ",Math.floor(amount/1))



//Write a  program to input angles of a triangle and check whether triangle is valid or not
  // var angle1 = 90;
  // var angle2 = 20;
  // var angle3 = 70;
  // ((angle1 + angle2 + angle3) == 180) ? console.log("valid traingle") :console.log("not a traingle")



//Write a  program to input all sides of a triangle and check whether triangle is valid or not
  // var side1 = 5;
  // var side2 = 8;
  // var side3 = 3;
  // if((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 >side1))
  // {
  //   console.log("valid traingle")
  // }
  // else
  // {
  //   console.log("not a valid traingle")
  // }



//Write a  program to check whether the triangle is equilateral, isosceles or scalene triangle
  // var side1 = 1;
  // var side2 = 1;
  // var side3 = 1;
  // if((side1 == side2) && (side2== side3))
  // {
  //   console.log("equilateral traingle")
  // }
  // else if((side1 == side2) || (side1 == side3) || (side3 == side2))
  // {
  //   console.log("isosceles traingle")
  // }
  // else
  // {
  //   console.log("scalene traingle")
  // }



//Write a  program to find all roots of a quadratic equation
  // var a = 1;
  // var b = -3;
  // var c = -10;
  // var root1,root2;
  // var root_ans = Math.sqrt((b * b) - (4 * a * c))
  // root1 = ((-b) + root_ans)/2*a
  // root2 = ((-b) - root_ans)/2*a
  // console.log("root 1 = ",root1)
  // console.log("root 2 = ",root2)





//Write a  program to calculate profit or loss
  // var sp = 5000;
  // var cp = 4098;
  // (sp > cp) ? console.log("profit = ",sp - cp) : console.log("loss = ",cp - sp)




//Write a  program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and 
//Computer. Calculate percentage and grade according to following
  // var phy = 89;
  // var chem = 808;
  // var bio = 65;
  // var maths = 87;
  // var com = 89;
  // percentage = (phy+chem+bio+maths+com)/5
  // if(percentage <= 100)
  // {
  //   if(percentage >= 90)
  //   {
  //     console.log("Grade A")
  //   }
  //   else if(percentage >= 80 && percentage <= 90) 
  //   {
  //     console.log("Grade B")
  //   }
  //   else if(percentage >= 70 && percentage <= 80)
  //   {
  //     console.log("Grade C")
  //   }
  //   else if(percentage >= 60 && percentage <= 70)
  //   {
  //     console.log("Grade D")
  //   }
  //   else if(percentage >= 40 && percentage <= 60)
  //   {
  //     console.log("Grade E")
  //   }
  //   if(percentage < 40)
  //   {
  //     console.log("Grade F")
  //   }
  // }
  // else
  // {
  //   console.log("invalid percentage")
  // }



//wap to input seconds and calculate over all time
// var sec = 123456;
// console.log("minutes = ",sec/60);
// console.log("hours = ",sec/3600);
// console.log("days = ",sec/(3600*24))
// console.log("weeks = ",sec/(3600*24*7));
// console.log("months = ",sec/(3600*24*7*52));



//Write a program to display the first 10 natural numbers
// for(var i = 1 ; i <= 10 ; i++)
// {
//   console.log(i)
// }


//Write a  program to find the sum of first 10 natural numbers
// var sum = 0 
// for(var i = 1 ; i <= 10 ; i++)
// {
//   sum = sum + i 
// }
// console.log(sum)




//ALL PROGRAMS OF LOOP


//Write a program to display n terms of natural number and their sum.
// var sum = 0 
// for(var i = 1 ; i <= 7 ; i++)
// {
//   console.log(i)
//   sum = sum + i 
// }
// console.log(sum)



// Write a program to read 10 numbers from keyboard and find their sum and average
// var sum = 0 ;
// for(var i = 1 ; i <= 10 ; i++)
// {
//   var input = parseInt(prompt("Enter number = "))
//   sum = sum + input ;
// }
// console.log("sum = ",sum)
// console.log("avg = ",sum/10)



//Write a program to display the cube of the number upto given an integer
// var input = parseInt(prompt("Enter number = "))
// for(var i = 1 ; i <= input ; i++)
// {
//   console.log("Cube of the number is = ",i*i*i)
// }



//Write a program to display the multiplication table of a given integer
// var input = parseInt(prompt("Enter number = "))
// for(var i = 1 ; i <= 10 ; i++)
// {
//   console.log(input + " * " + i + " = " + input*i)
// }



//Write a program to display the multipliaction table vertically from 1 to n.
// var n = parseInt(prompt("Enter number = "))
// for(var i = 1 ; i <= n ; i++)
// {
//   console.log("Table of = ",i)
//   for(var j = 1 ; j <= 10 ; j++)
//   {
//   console.log(i + " * " + j + " = " + j*i)
//   }
// }



//Write a program to display the n terms of odd natural number and their sum
// var count   =   1
// var number  =   1
// var sum     =   0

// while(count <= 10){
//     if(number%2 != 0){
//         count++
//         sum += number
//         //console.log(number)
//     } 
//     number++
// }

// console.log(sum)



//Write a program to calculate the factorial of a given number
// var n = parseInt(prompt("Enter number = "))
// var fact = 1
// for(var i = 1 ; i <= n ; i++)
// {
//   fact = fact * i ;
// }
// console.log("Factorial is = ",fact)



//Write a program to display the n terms of even natural number and their sum.
// var count   =   1
// var number  =   1
// var sum     =   0

// while(count <= 10){
//     if(number%2 == 0){
//         count++
//         sum += number
//         console.log(number)
//     } 
//     number++
// }

// console.log(sum)



//Write a program to find the sum of the series [ 1-X^2/2!+X^4/4!- .........].
// var x = parseInt(prompt("Enter x = "))
// var numOfTerms = parseInt(prompt("Enter number of terms = "))
// var ans = 1
// for(var i = 0 ; i <= numOfTerms ; i += 2)
// {
//   var den = 1 
//   var num = 1
//   //console.log(i)
//   for(var j = 1 ; j <= i ; j++)
//   {
//     num = num * x
//     den = den * j
//   }
//   //console.log(den,num)
//   if(i == 1)
//   {
//     ans = 1
//   }
//   else if(i % 4 ==0)
//   {
//     ans = ans + (num/den)
//   }
//   else
//   {
//     ans = ans - (num/den)
//   }
// }
// console.log(ans)



//Write a program to display the n terms of harmonic series and their sum.
// var n = parseInt(prompt("Enter n = "))
// var sum = 0 
// for(var i = 1 ; i <= n ; i++)
// {
//   sum = sum + (1/i)
//   console.log("1/"+ i)
// }
// console.log(sum)


// Write a program to display the sum of the series [ 9 + 99 + 999 + 9999 ...].
// var n = parseInt(prompt("Enter n = "))
// var num = 10
// var sum = 0
// for(var i = 1 ; i <= n ; i++)
// {
//   sum = sum + (num-1)
//   num = num * 10 
// }
// console.log(sum)


//Write a program to display the sum of the series [ 1+x+x^2/2!+x^3/3!+....].
// var x = parseInt(prompt("Enter x = "))
// var numOfTerms = parseInt(prompt("Enter number of terms = "))
// var ans = 0
// for(var i = 0 ; i < numOfTerms ; i++)
// {
//   var num = 1
//   var den = 1 
//   for(var j = 1 ; j <= i ; j++)
//   {
//     num = num * x
//     den = den * j
//   }
//   ans = ans + (num/den)
// }
// console.log(ans)


//Write a program to find the sum of the series [ x - x^3 + x^5 + ......].
// var x = parseInt(prompt("Enter x = "))
// var numOfTerms = parseInt(prompt("Enter number of terms = "))
// var ans = 0
// var k = 1
// for(var i = 1 ; i <= numOfTerms ; i++)
// {
//   var num = 1
//   for(var j = 1 ; j <= k ; j++)
//   {
//     num = num * x
//   }
//   k = k + 2
//   if(i%2 == 0)
//   {
//     ans = ans - num
//   }
//   else
//   {
//     ans = ans + num
//   }
// }
// console.log(ans)



//Write a program to display the n terms of square natural number and their sum
// var numOfterms = parseInt(prompt("Enter number of terms = "))
// sum = 0
// for(var i = 1 ; i <= numOfterms ; i++)
// {
//   sum = sum + (i * i)
//   console.log(i*i)
// }
// console.log(sum)



//Write a program to find the sum of the series 1 +11 + 111 + 1111 + .. n terms.
// var n = parseInt(prompt("Enter n = "))
// var num = 1
// var count = 10
// var sum = 0
// for(var i = 1 ; i <= n ; i++)
// {
//   sum = sum + (num)
//   num = num + count
//   count *= 10
// }
// console.log(sum)



//Write a program to check whether a given number is a perfect number or not.
//var num = parseInt(prompt("Enter number  = "))
// sum = 0
// for(var i = 1 ; i <= (num/2) ; i++)
// {
//   if(num%i==0)
//   {
//     sum = sum + i
//   }
// }
// if(sum == num)
// {
//   console.log("perfect number")
// } 
// else
// {
//   console.log("not a perfect number")
// }

//Write a program to find the perfect numbers within a given number of range
// var start = parseInt(prompt("Enter start  = "))
// var end = parseInt(prompt("Enter end  = "))
// for(var num = start ; num <= end ; num++)
// {
//   sum = 0
//   for(var i = 1 ; i <= (num/2) ; i++)
//   {
//     if(num%i==0)
//     {
//       sum = sum + i
//     }
//   }
//   if(sum == num)
//   {
//    console.log(num)
//   } 
// }



//Write a program to find the Armstrong number for a given range of number.
// var num = parseInt(prompt("Enter number  = "))
// var length = 0 
// var numCopy = num
// var lastDigit,sum = 0,fact
// while(num!=0)
// {
//   length += 1
//   num = Math.floor(num / 10)
// }
// num = numCopy
// while(num!=0)
// {
//   lastDigit = num % 10
//   fact = 1
//   for(i =1 ; i <= length ; i++)
//   {
//     fact = fact * lastDigit
//   }
//   sum = sum + fact
//   num = Math.floor(num / 10)
// }
// if(sum == numCopy)
// {
//   console.log("armstrong number")
// }
// else
// {
//   console.log("not a armstrong number")
// }



//Write a program to find the Armstrong number for a given range of number
// var start = parseInt(prompt("Enter start  = "))
// var end = parseInt(prompt("Enter end  = "))
// for(var num1 = start ; num1 <= end ; num1++)
// {
//   var length = 0 
//   var numCopy = num1
//   var num = num1
//   var lastDigit,sum = 0,fact
//   while(num!=0)
//   {
//     length += 1
//     num = Math.floor(num / 10)
//   }
//   num = numCopy
//   while(num!=0)
//   {
//     lastDigit = num % 10
//     fact = 1
//     for(i =1 ; i <= length ; i++)
//     {
//       fact = fact * lastDigit
//     }
//     sum = sum + fact
//     num = Math.floor(num / 10)
//   }
//   if(sum == numCopy && sum >= 10)
//   {
//     console.log(numCopy)
//   }
// }



//Write a program to determine whether a given number is prime or not.
// var number = parseInt(prompt("Enter number  = "))
// var count = 0
// for(var i = 1 ; i <= number ; i++)
// {
//   if(number % i == 0)
//   {
//     count++
//   }
// }
// if(count == 2)
// {
//   console.log(number+" is a prime number")
// }
// else
// {
//   console.log(number+" is a not prime number")
// }



//Write a program to find the prime numbers within a range of numbers.
// var start = parseInt(prompt("Enter start  = "))
// var end = parseInt(prompt("Enter end  = "))
// for(var number = start ; number <= end ; number++)
// {
//   var count = 0
//   for(var i = 1 ; i <= number ; i++)
//   {
//     if(number % i == 0)
//     {
//       count++
//     }
//   }
//   if(count == 2)
//   {
//     console.log(number)
//   } 
// }



//Write a program to display the first n terms of Fibonacci series.
// var range = parseInt(prompt("Enter range  = "))
// var n1 = 0 
// var n2 = 1
// var n3 = 0
// for(var i = 1 ; i <= range ; i++)
// {
//   if(i == 1)
//   {
//     console.log(n1)
//   }
//   else if(i == 2)
//   {
//     console.log(n2) 
//   }
//   else
//   {
//     n3 = n1 + n2 
//     n1 = n2
//     n2 = n3
//     console.log(n3)
//   }
// }



//Write a program to display the number in reverse order.
// var num = parseInt(prompt("Enter number  = "))
// revNumber = 0
// while(num!=0)
//   {
//     lastDigit = num % 10
//     revNumber = revNumber * 10 + lastDigit
//     num = Math.floor(num / 10)
//   }
// console.log(revNumber)




//Write a program to check whether a number is a palindrome or not.
// var num = parseInt(prompt("Enter number  = "))
// var numCopy = num
// var revNumber = 0
// while(num!=0)
//   {
//     lastDigit = num % 10
//     revNumber = revNumber * 10 + lastDigit
//     num = Math.floor(num / 10)
//   }
// if(numCopy == revNumber)
// {
//   console.log("palindrom")
// }
// else
// {
//   console.log("not palindrom")
// }





//Write a program to find the number and sum of all integer between 100 and 200 which are divisible by 9.
// var sum = 0 
// for(var i = 100 ; i <= 200 ; i++)
// {
//   if(i % 9 == 0)
//   {
//     sum = sum + i
//     console.log(i)
//   }
// }
// console.log(sum)



//Write a program to convert a binary number into a decimal number without using array, function and while loop.
// var Bnum = parseInt(prompt("Enter binary number  = "))
// var dec = 0
// var count = 0
// var pow
// while(Bnum!=0)
//   {
//     pow = 1 
//     lastDigit = Bnum % 10
//     for(var i = 0 ; i < count ; i++)
//     {
//       pow = pow * 2
//     }
//     dec = dec + pow*lastDigit
//     count++
//     Bnum = Math.floor(Bnum / 10)
//   }
// console.log(dec)





//Write a program to find HCF (Highest Common Factor) of two numbers
// var num1 = parseInt(prompt("Enter number 1  = "))
// var num2 = parseInt(prompt("Enter number 2  = "))
// var lowset = num1 < num2 ? num1 : num2
// var hcf
// for(i = 1 ; i <= lowset ; i++)
// {
//   if(num1%i == 0 && num2%i==0)
//   {
//     hcf = i
//   }
// }
// console.log(hcf)




//Write a program to find LCM of any two numbers.
// var num1 = parseInt(prompt("Enter number 1  = "))
// var num2 = parseInt(prompt("Enter number 2  = "))
// var highest = num1 > num2 ? num1 : num2
// while(1)
// {
//   if(highest%num1 == 0 && highest%num2==0)
//   {
//     console.log("lcm = ",highest)
//     break
//   }
//   highest++
// }



//Write a program to check whether a number is a Strong Number or not
// var num = parseInt(prompt("Enter number  = "))
// var numCopy = num
// var sum = 0 , fact
// while(num!=0)
//   {
//     lastDigit = num % 10
//     fact = 1
//     for(i = 1 ; i <= lastDigit ; i++)
//     {
//       fact = fact * i
//     }
//     sum = sum + fact
//     num = Math.floor(num / 10)
//   }
// if(numCopy == sum)
// {
//   console.log("strong number")
// }
// else{
//   console.log("not")
// }



//Write a program to find Strong Numbers within a range of numbers.
// var start = parseInt(prompt("Enter start  = "))
// var end = parseInt(prompt("Enter end  = "))
// for(var num1 = start ; num1 <= end ; num1++)
// {
//   var num = num1
//   var numCopy = num
//   var sum = 0 , fact
//   while(num!=0)
//     {
//       lastDigit = num % 10
//       fact = 1
//       for(i = 1 ; i <= lastDigit ; i++)
//       {
//         fact = fact * i
//       }
//       sum = sum + fact
//       num = Math.floor(num / 10)
//     }
//   if(numCopy == sum)
//   {
//     console.log(numCopy)
//   }
// }



//Write a program to find out the sum of an A.P. series.
// var a = parseInt(prompt("starting number of the A.P. series  = "))
// var n = parseInt(prompt("number of items for the A.P. series  = "))
// var d = parseInt(prompt("common difference of A.P. series = "))
// var sum = 0
// var ap
// for(i = 1 ; i <= n ; i++)
// {
//   ap = a + (i - 1) * d
//   sum = sum + ap
//   console.log(ap)
// }
// console.log(sum)