console.log('******************')
console.log('* ROMAN NUMERALS *')
console.log('******************')

function units(x) {
    return ['','I','II','III','IV','V','VI','VII','VIII','IX'][x]
}

function tens(x) {
    return ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'][x]
}

function hundreds(x) {
    return ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'][x]
}

function thousends(x, stt) {
    if( stt ) return ['','M','MM','MMM','ĪṼ','Ṽ','ṼĪ','ṼĪĪ','ṼĪĪĪ','ĪẊ'][x]
    return ['','Ī','ĪĪ','ĪĪĪ','ĪṼ','Ṽ','ṼĪ','ṼĪĪ','ṼĪĪĪ','ĪẊ'][x]    
}

function tenthousends(x) {
    return ['','Ẋ','ẊẊ','ẊẊẊ','Ẋ','Ĺ','ĹẊ','ĹẊẊ','ĹẊẊẊ','ẊĈ'][x] 
}
function hundrendthousends(x) {
    return ['','Ĉ','ĈĈ','ĈĈĈ','ĈĎ','Ď','ĎĈ','ĎĈĈ','ĎĈĈĈ','ĈṀ'][x] 
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