export interface LegacyResponse<T> {
  message: string,
  payload: T[],
  resultsType: number,
  success: boolean,
}
