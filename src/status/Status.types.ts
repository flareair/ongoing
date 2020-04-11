export interface Status {
  id: string,
  name: string
}

export interface StatusByIdState {
  readonly [prop: string]: Status
}

export type AllStatusesState = ReadonlyArray<string>;

export interface StatusesState {
  readonly statusById: StatusByIdState,
  readonly allStatuses: AllStatusesState
}
