export interface ApiResult<T> {
  page: Number;
  per_page: Number;
  total: Number;
  total_pages: number;
  data: Array<T>;
  support: {
    url: String;
    text: String;
  };
}
export interface ApiUserResult<T> {
  data: T;
  support: {
    url: String;
    text: String;
  };
}
