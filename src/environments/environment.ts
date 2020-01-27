// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost/restapi/index.php/test/test_api',
  apiInsert:'http://203.150.107.181/api/v1.0/auth/signup',
  apiLogin:'http://203.150.107.181/api/v1.0/auth/login',
  apiUser:'http://203.150.107.181/api/v1.0/user/profile',
  apiProduct:'http://203.150.107.181/api/v1.0/product/:categoryId?limit=5'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
