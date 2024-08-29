// Type node script.js in the codespaces console to run this file. Make sure to save before running it. CTRL + ` will open the console if you don't see it.
console.log("hello")

function isEligibleForFreeShipping(purchaseAmount, isMember) {
    let freeShipping
    if (isMember === true) {
        freeShipping = true
    } else if (purchaseAmount >= 50) {
        freeShipping = true
    } else {
        freeShipping = false
    }

    if (freeShipping === true) {
        console.log("You are eligible for free shipping.")
    } else {
        console.log("You are not eligible for free shipping.")
    }
}

console.log(isEligibleForFreeShipping(30, true))
