export type ApiResponse<T> = ApiErrorResponse | ApiSuccessResponse<T>;

export interface ApiErrorResponse {
  status: number;
  statusText: string;
  isSuccessful: false;
  error: string;
}

export interface ApiSuccessResponse<T> {
  status: number;
  statusText: string;
  isSuccessful: true;
  data: T;
}