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

function thousends(x, stt) {
    if (x == 1 && stt) return 'M'
    if (x == 2 && stt) return 'MM'
    if (x == 3 && stt) return 'MMM'
    if (x == 1) return 'Ī'
    if (x == 2) return 'ĪĪ'
    if (x == 3) return 'ĪĪĪ'
    if (x == 4) return 'ĪṼ'
    if (x == 5) return 'Ṽ'
    if (x == 6) return 'ṼĪ'
    if (x == 7) return 'ṼĪĪ'
    if (x == 8) return 'ṼĪĪ'
    if (x == 9) return 'ĪẊ'
    return ''
}

function tenthousends(x) {
    if (x == 1) return 'Ẋ'
    if (x == 2) return 'ẊẊ'
    if (x == 3) return 'ẊẊẊ'
    if (x == 4) return 'Ẋ'
    if (x == 5) return 'Ĺ'
    if (x == 6) return 'ĹẊ'
    if (x == 7) return 'ĹẊẊ'
    if (x == 8) return 'ẊẊẊ'
    if (x == 9) return 'ẊĈ'
    return ''
}
function hundrendthousends(x) {
    if (x == 1) return 'Ĉ'
    if (x == 2) return 'ĈĈ'
    if (x == 3) return 'ĈĈĈ'
    if (x == 4) return 'ĈĎ'
    if (x == 5) return 'Ď'
    if (x == 6) return 'ĎĈ'
    if (x == 7) return 'ĎĈĈ'
    if (x == 8) return 'ĎĈĈĈ'
    if (x == 9) return 'ĈṀ'
    return ''
}

function romanNumeral(x) {

    const uni = x % 10
    const ten = parseInt(x / 10) % 10
    const hun = parseInt(x / 100) % 10
    const tho = parseInt(x / 1000) % 10
    const tth = parseInt(x / 10000) % 10
    const hth = parseInt(x / 100000)

    const stt = (tth == 0 && hth == 0) ? true : false

    return x + ' - ' + hundrendthousends(hth) + tenthousends(tth) + thousends(tho, stt) + hundreds(hun) + tens(ten) + units(uni)
}

function main() {

    for (let i = 1; i < 1000000; i = i + 1) {

        console.log(romanNumeral(i))

    }

}

main()