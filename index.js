capitalise = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}

reverse = (str) => {
    str = 'string'
    rts = ''
    for (n = str.length - 1; n >= 0; n--) {
        rts = rts + str[n]
    }
    return rts
}

calc = () => {
    isNumeric = (inp) => isFinite(Number(inp)) ? true : false
    areNumeric = (a, b) => isNumeric(a) && isNumeric(b)
    add = (a, b) => areNumeric(a, b) ? Number(a) + Number(b) : 'illegal operation: Non numeric inputs'
    subtract = (a, b) => areNumeric(a, b) ? Number(a) - Number(b)  : 'illegal operation: Non numeric inputs'
    multiply = (a, b) => areNumeric(a, b) ? Number(a) * Number(b)  : 'illegal operation: Non numeric inputs'
    divide = (a, b) => { 
        valid = areNumeric(a, b)
        if (valid) {
            return (b === 0) ? 'illegal operation: division by 0' :  Number(a) / Number(b) 
        } 
        return valid  
    }
    return { add, subtract, multiply, divide }
} 

// c = calc()
// c.subtract('1', 6)
const az = 'abcdefghijklmnopqrstuvwxyz'
isNumeric = (chr) => isFinite(Number(chr)) ? true : false
isAlpha = (chr) => (!isNumeric(chr) && az.indexOf(chr) && az.indexOf(chr.toLowerCase()) > -1)
// isUpper = (chr) => (isAlpha(chr) && chr === chr.toUpperCase())

isUpper = (chr) => (isAlpha(chr) && chr === chr.toUpperCase())
idx = (chr) => az.indexOf(chr)

enc = (chr, shft, encrypt) => {
    nbr = isNumeric(chr)
    abc = isAlpha(chr)
    // upp = isUpper(chr)
    if (!nbr && abc > -1) {
        nth = encrypt ? Math.abs((idx(chr.toLowerCase()) + shft) % 26) : Math.abs((idx(chr.toLowerCase()) - shft) % 26)
        console.log([chr, nbr, abc, az[nth]])
        return az[nth].toUpperCase()
    } else {
        return ''
    }
}


caesar = (str, shft, encrypt = true) => {

    // shft = 1  str = 'attackatonce'   az[az.indexOf(str[1]) + shft]  isUpper(0) isAlpha('#')
    cipher = ''
    for (n = 0; n < str.length; n++) {
        console.log(str[n])
        cipher += enc(str[n], shft, encrypt) 
    }
    return cipher
}

// caesar('attackatdawn', 25)
// caesar('ZSSZBJZSCZVM', 25, false)


analyzeArray = (arr) => {
    arr.sort((a, b) => a - b)
    len = arr.length
    avg = arr.reduce((prev, next) => prev += next, 0) / len
    min = arr[0] 
    max = arr.at(-1)

    return {    
        average: avg,
        min: min,
        max: max,
        length: len
    }
}


module.exports = { calc, capitalise, reverse, caesar, analyzeArray }
// module.exports = reverse