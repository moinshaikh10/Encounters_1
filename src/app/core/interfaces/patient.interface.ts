export interface Patient {
  Id: number;
  InmateNumber: string;
  IsReleased: boolean;
  BirthDate: Date;
  NameFirst: string;
  NameMiddle: string;
  NameLast: string;
  NameFull: string;
  Sex: string;
  SiteDepartmentId: number;
  SiteId: number;
}