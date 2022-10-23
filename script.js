let slider = document.getElementById("slider")
let generateBtn = document.getElementById("generateBtn")
let options = document.querySelectorAll(".option input")
let result = document.getElementById("result")
let passIndicator = document.querySelector(".pass-indicator")
let copyIcon = document.getElementById("copyIcon")
let checked= document.getElementById("checked")
let caracters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}




function changeStrong(){
    passIndicator.id = slider.value <= 8 ? "weak" : slider.value <= 16 ? "medium" : "strong"
}


function updateSlider() {

    document.getElementById("length").innerHTML = slider.value
    ganeratePassword()
    changeStrong()
}
updateSlider()






function ganeratePassword() {
    let staticPAssword = ""
    let randomPassword = ""
    let isDaplicate = false
    let randomCarc = ""
    passlength = slider.value
    options.forEach(option => {
        if (option.checked) {
            if (option.id !== "spaces" && option.id !== "excludeDuplicate") {
                staticPAssword += caracters[option.id]
            } else if (option.id === "spaces") {
                staticPAssword += `   ${staticPAssword}   `
            } else {
                isDaplicate = true
            }

        }
        
    })
    

    for (let i = 0; i < passlength; i++) {

        randomCarc = staticPAssword[Math.floor(Math.random() * staticPAssword.length)]
        if(isDaplicate){
            !randomPassword.includes(randomCarc) || randomCarc == " " ? randomPassword += randomCarc : i-- 
        }
        else{
            randomPassword += randomCarc  
        }
    }

    
    result.value = randomPassword

}












copyIcon.addEventListener("click" , function(){
    navigator.clipboard.writeText(result.value)
    checked.style.display = "block"
    copyIcon.style.display = "none"
    setTimeout(()=>{
        checked.style.display = "none"
        copyIcon.style.display = "block"
    },1500)

})


slider.addEventListener("input", function () {
    updateSlider()
})

generateBtn.addEventListener("click", function () {
    ganeratePassword()
})