console.log(generate_otp_number(5))
console.log(generate_otp_alpha_numeric(5))

function generate_otp_number(numOfTerms)
{
  var otp = ""
  for(var i = 0 ; i < numOfTerms ; i++)
  {
    otp += Math.floor(Math.random() * 10)
  }
  return otp
}
function generate_otp_alpha_numeric(numOfTerms)
{
  var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  var otp = ""
  for(var i = 0 ; i < numOfTerms; i++)
  {
    otp += str[Math.floor(Math.random() * str.length)]
  }
  return otp
}