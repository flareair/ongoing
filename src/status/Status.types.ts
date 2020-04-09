export interface Status {
  id: string,
  name: string
}

export interface StatusByIdState {
  [prop: string]: Status
}

export type AllStatusesState = string[];

export interface StatusesState {
  statusById: StatusByIdState,
  allStatuses: AllStatusesState
}
