function genaratRandomOtp(digits){
    let otp=''
    for(let i = 0 ; i<digits ; i++){
         otp += Math.floor(Math.random()*10)
    }
    console.log(otp)
}

genaratRandomOtp(6)
