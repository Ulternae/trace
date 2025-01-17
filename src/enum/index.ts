enum SupportLanguages {
  SPANISH = "es",
  ENGLISH = "en",
  GALICIAN = "gl",
}

enum ThemeType {
  DARKMODE = "dark",
  LIGHTMODE = "light"
}

enum RoutesType {
  USERS = "users",
  FAVORITES = "favorites",
  USER = "user"
}

enum FilterUserType {
  FIRSTNAMES = "firstNames",
  LASTNAMES = "lastNames",
  EMAIL = "email",
  COUNTRY = "country",
  ADDRESS = "address"
}

enum CardInfoType {
  PHONE = "phone",
  ADDRESS = "address",
  COUNTRY = "country",
  GENDER = "gender",
}

enum CardUserType {
  PHONE = "phone",
  COUNTRY = "country",
  GENDER = "gender",
  PROFESSION = "profession",
  ADDRESS = "address",
  STATUS = "status",
  LANGUAGE = "language",
  EMAIL = "email",
}

enum ErrorType {
  ErrorGetUsers = "errorBack.errorGetUsers",
  ErrorGetUser = "errorBack.errorGetUser",
  UnknownError = "errorBack.unknownError",
  ErrorSendInfo = "errorBack.errorSendInfo"
}

export { SupportLanguages, ErrorType, RoutesType, ThemeType, FilterUserType, CardInfoType, CardUserType };
