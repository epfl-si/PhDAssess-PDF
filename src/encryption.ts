import debug_ from "debug";

const CryptoJS = require("crypto-js");
const debug = debug_('encryption')

export function encrypt(message: string | [], passphrase: string | undefined = process.env.PHDASSESS_ENCRYPTION_KEY): string {
  if (passphrase === undefined) {
    throw 'encryption error, trying to encrypt a value without a passphrase set'
  }

  if (message === "") {
    return message;
  } else {
    return CryptoJS.AES.encrypt(JSON.stringify(message), passphrase).toString();
  }

}

export function decrypt(cryptedMessage: string, passphrase: string | undefined = process.env.PHDASSESS_ENCRYPTION_KEY): string {
  if (passphrase === undefined) {
    throw 'encryption error, Trying to encrypt a value without a passphrase set'
  }
  if (cryptedMessage === "") {
    return cryptedMessage;
  } else {
    const bytes = CryptoJS.AES.decrypt(cryptedMessage, passphrase)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  }
}

export function decryptVariables(variables: {[key: string]: string}): {[key: string]: string} {
  const decryptedVariables: {[key: string]: string} = {}

  Object.keys(variables).map((key) => {
    try {
      decryptedVariables[key] = decrypt(variables[key])
    } catch (e) {
      if (e instanceof SyntaxError) {
        // not good, some values are not readable. Get the error for now,
        // but raise it after the whole decrypt
        // we may need to do something afterward
        debug(`Can't decrypt the key: ${key}`)
      } else {
        throw e
      }
    }
  })
  return decryptedVariables
}
