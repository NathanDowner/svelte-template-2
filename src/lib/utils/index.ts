import type { AxiosError } from "axios";

export function getApiErrorMessage(error: any): string {
  const err = error as AxiosError;
  if (err.response?.data) {
    const { title, detail } = err.response.data;
    return detail || title || 'Something went wrong!';
  }
  return err.message;
}