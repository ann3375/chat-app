import { useState, useCallback } from 'react';
import { URL_API } from './contants';

type Response<R> = R | undefined;
type ResponseError = unknown;

interface IFullResponse<R> {
  isLoading: boolean;
  response: Response<R>;
  error: ResponseError;
}

export class Http {
  static HEADERS = { 'Content-Type': 'application/json' };
}

async function request(url: string, method = 'GET', data = {}) {
  const configRequest = {
    method,
    headers: Http.HEADERS,
  };
  if (method === 'POST' || method === 'PATCH') {
    // configRequest.body = JSON.stringify(data);
  }
  const response = await fetch(url, configRequest);
  return await response.json();
}

export const useApi = <R = unknown, T = Record<string, unknown>>(props: {
  method: string;
  url: string;
}): [IFullResponse<R>, (data?: T, params?: string) => void] => {
  const { method, url } = props;
  const endpoint = `${URL_API}${url}`;

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Response<R>>();
  const [error, setError] = useState<ResponseError>();

  const fetchData = useCallback(
    async (data, params) => {
      try {
        setIsLoading(true);
        const result = await request(params ? endpoint + params : endpoint, method, data);
        setResponse(result);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [method, url]
  );
  return [{ isLoading, response, error }, fetchData];
};
