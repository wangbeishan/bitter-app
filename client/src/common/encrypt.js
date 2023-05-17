import CryptoJS from 'crypto-js'


export function encryptPassword(password) {
    return CryptoJS.MD5(password).toString()
}
