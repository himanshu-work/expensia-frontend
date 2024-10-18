# How to use Auth service and its working

BASE_URL = "http://localhost:8080/expensia/auth";
RESET_PASSWORD_BASE_URL = "http://localhost:8080/expensia/password-reset";
AUTH_USER_BASE_URL = "http://localhost:8080/expensia/user";

## Basic API Call Funtions

- LoginAPI
- RegisterAPI
- SendResetLink
- ResetPassword

## Axios Interceptor

- task is get authorization from header of each url

## Utility Function

- SaveLoggedInUser
- GetLoggedInUser
- IsUserLoggedIn
- IsAdminUser
- StoreToken
- GetToken
- IsTokenExpired
- Logout
- LogoutIfTokenExpired

### Logout Time is 3 Hours
