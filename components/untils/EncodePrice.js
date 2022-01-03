function AutoAddZero(deg) {
    return ('0' + deg).slice(-3)
}
function EncodePrice(price) {
    const billion = Math.floor(price / 1000000000)
    const million = Math.floor((price - billion * 1000000000) / 1000000)
    const thoudsand = Math.floor((price - billion * 1000000000 - million * 1000000) / 1000)
    const hundred = Math.floor((price - billion * 1000000000 - million * 1000000 - thoudsand * 1000) / 100)
    if (billion) {
        if (million) {
            if (thoudsand) {
                if (hundred) {
                    return `${billion}.${AutoAddZero(million)}.${AutoAddZero(thoudsand)}.${hundred}00`;
                }
            }
        }
        if (thoudsand) {
            return `${billion}000.${AutoAddZero(thoudsand)}000`
        }
        return `${billion}000000000`
    }
    if (million) {
        if (thoudsand) {
            if(hundred){
                return `${million}.${AutoAddZero(thoudsand)}.${hundred}00`
            }
            return `${million}.${AutoAddZero(thoudsand)}000`
        }
        if(hundred){
            return `${million}.000.${hundred}00`
        }
        return `${million}.000.000`
    }
    if (thoudsand){
        if(hundred){
            return `${thoudsand}.${hundred}00`
        }
        return `${thoudsand}.000`
    }
}
export default EncodePrice