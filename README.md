![Alt Wiser](https://wearewiser.com/assets/images/wiser-logo/wiser-purple.svg)

# Frontend Developer Test

# Modules

As required, I have added two new modules which are lazy loaded: 
- The AuthModule (directory path:  src/app/auth)
- The Secure Module (direcotry path: src/app/secure)

They are independent of each other and don't share any code.

# The AuthModule

This module consists of a couple of pages:
- the Login page on the: /auth/login route
- the Logout page on the: /auth/logout route

Inside this module there are also two components:
- the login-form component which is displayed on the Login page
- the spinner component which is displayed on the Logout page.

As required, an Angular animation is used on the login-form component which is activated each time the login request fails. The animation is controlled via the "animateForm" input parameter.

On the Logout page, the spinner component is displayed for 1500ms, after that,
the AuthService.logout() method is used for clearing the user data and the user gets redirected to the Login Page.

# The SecureModule

This module is lazy loaded when accessing the /secure route.

It consists of a couple of pages:
- Content Page on the /secure route
- User Details Page on the secure/details/:id route

For the Content page, I've used w3-css for displaying a mock list of users. Clicking on each of the users displays the user details section which is a child state of the secure state.

The "secure" routes are protected by the AuthGuardService.

# The AuthGuardService

The AuthGuardService implements the CanActivate interface. It uses the AuthService 
checkTokenValidity() method to check if the token is correct and hasn't expired.

# The AuthService

The Auth Service has been updated. It contains the following public methods:

- login() -> used by the Login Component. A GET request is made on this endpoint: 'https://dev-test-service.madebywiser.com/login' and if successful, the received token is saved in Local Storage.

- logout() -> used by the Logout Component. The token is removed from Local Storage and 'profile$' is updated to undefiend.

- checkTokenValidity() -> used by the AuthGuard. Using the stored token, A GET request is made on this endpoint: 'https://dev-test-service.madebywiser.com/me'. On successful response, 'profile$' is updated;

Note: I've added the responseType: 'text' header to both GET requests. It seems that without it, HttpClient automatically assumes that the response is in JSON fromat and throws an error.
