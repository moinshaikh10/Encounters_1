import { User } from '../core/interfaces/user.interface'

export const environment = {
  production: true,
  urls: {
    baseAssetsPath: '#{baseAssetsPath}',
    encountersApiUrl: '#{encountersApiUrl}',
    searchApiUrl: '#{searchApiUrl}',
    patientApiUrl: '#{patientApiUrl}',
    patientProfileApiUrl: "#{patientProfileApiUrl}",
    ermaWebsiteApi: '#{ermaWebsiteApi}',
    draftApi: '#{draftApi}',
  },

  appData: {
    currentUser: {
      AccessLevelId: 0,
      UserId: 0,
      UserIdHash: 0,
      WindowsLogin: '',
    } as User,
    patientId: 0,
    apiKey: '',
  }
};
