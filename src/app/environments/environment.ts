// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { User } from '../core/interfaces/user.interface'

export const environment = {
  production: false,
  urls: {
    baseAssetsPath: 'http://sdcdev01/encounters/assets/',
    encountersApiUrl: 'http://localhost:5271/api/encounters/',
    searchApiUrl: 'http://sdcdev01/searchapi/api/',
    patientApiUrl: "http://sdcdev01/CCS.Patient/api/",
    patientProfileApiUrl: 'http://sdcdev01/PatientProfileApi/api/',
    ermaWebsiteApi: 'http://sdcdev01/ccs.erma.website/api/',
    draftApi: 'https://sdcdev01/draftapi/api/',
  },

  appData: {
    currentUser: {
      AccessLevelId: 21,
      UserId: 42148,
      UserIdHash: -395257049,
      WindowsLogin: 'doshrout',
    } as User,
    patientId: 5746737,
    // tslint:disable-next-line:max-line-length
    apiKey: 'EAAAAMwVYF2rYBbmgiq6ZlBi/PA6Z6sjj9a8E1Pi2HeWI+n8LuAUAMGTQGWqAlZjcvhYvFERpnaubxXB/Pa4U52GtvyOIjVYWXwLmOUprUL7AyZR9IyJOZqYeyefXS8rICu5+iW2FaHey3GCpDECmkzniDc=',
  }
};
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  
  