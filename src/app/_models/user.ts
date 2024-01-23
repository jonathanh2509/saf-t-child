enum UserType {
  Owner = 'owner',
  Secondary = 'secondary',
}

interface PhoneNumber {
  areaCode: string // Must contain only numbers
  phoneNumber: string // Must contain only numbers
}

interface User {
  userType: UserType
  username?: string // Required for owners, optional for secondary users
  firstName: string // Required for all users
  lastName: string // Required for all users
  email: string[] // Array of strings, each a valid email
  primaryPhoneNumber: PhoneNumber // Required for all users
  secondaryPhoneNumbers?: PhoneNumber[] // Optional, array of PhoneNumber
}
