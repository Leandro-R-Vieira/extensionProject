import { API_KEY, BASE_URL } from "../config";
interface RequestOptions {
  method: 'GET';
}
interface ApiResponse<T> {
  results: T[];
}

export const GET = async <T>(url: string): Promise<ApiResponse<T>> => {
  const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`;
  const options: RequestOptions = { method: 'GET' };
  const response = await fetch(API_URL, options);  
  return response.json();  
}
