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
  USER = "user",
  METRICS = "metrics"
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

enum ErrorType {
  ErrorGetUsers = "errorBack.errorGetUsers",
  ErrorGetUser = "errorBack.errorGetUser",
  UnknownError = "errorBack.unknownError",
  ErrorSendInfo = "errorBack.sendInfo"
}

export { SupportLanguages, ErrorType, RoutesType, ThemeType, FilterUserType, CardInfoType };
