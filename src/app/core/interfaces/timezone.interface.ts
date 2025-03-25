export interface TimezoneInterface {
  Success: string;
  ResultType: number;
  Message: string;
  Payload: {
    SiteId: Number;
    SiteName: string;
    TimeZone: string;
  }
}
