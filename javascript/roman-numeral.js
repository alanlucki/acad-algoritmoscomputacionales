console.log('******************')
console.log('* ROMAN NUMERALS *')
console.log('******************')

function units(x) {
    if (x == 1) return 'I'
    if (x == 2) return 'II'
    if (x == 3) return 'III'
    if (x == 4) return 'IV'
    if (x == 5) return 'V'
    if (x == 6) return 'VI'
    if (x == 7) return 'VII'
    if (x == 8) return 'VIII'
    if (x == 9) return 'IX'
    return ''
}

function tens(x) {
    if (x == 1) return 'X'
    if (x == 2) return 'XX'
    if (x == 3) return 'XXX'
    if (x == 4) return 'XL'
    if (x == 5) return 'L'
    if (x == 6) return 'LX'
    if (x == 7) return 'LXX'
    if (x == 8) return 'LXXX'
    if (x == 9) return 'XC'    
    return ''
}

function hundreds(x) {
    if (x == 1) return 'C'
    if (x == 2) return 'CC'
    if (x == 3) return 'CCC'
    if (x == 4) return 'CD'
    if (x == 5) return 'D'
    if (x == 6) return 'DC'
    if (x == 7) return 'DCC'
    if (x == 8) return 'DCCC'
    if (x == 9) return 'CM'    
    return ''
}

function romanNumeral(x) {
    const uni = x % 10
    const ten = parseInt(x / 10) % 10
    const hun = parseInt(x / 100)
    return x + ' - ' + hundreds(hun) + tens(ten) + units(uni)
}

function main() {

    for (let i = 1; i < 1000; i++) {

        console.log( romanNumeral(i) )

    }
    
}

main()