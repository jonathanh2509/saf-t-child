import { Injectable } from '@angular/core'
import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js'

@Injectable({
  providedIn: 'root',
})
export class PhoneNumberService {
  validatePhoneNumber(areaCode: string, phoneNumber: string): boolean {
    const fullNumber = '+' + areaCode + phoneNumber
    const number = parsePhoneNumberFromString(fullNumber)

    if (number) {
      return (
        number.isValid() &&
        number.formatNational().replace(/\s/g, '') === phoneNumber
      )
    }
    return false
  }
}
