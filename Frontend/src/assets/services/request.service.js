import { get, post, put, delete as del } from 'axios';

const getHeaders = (token) => (
  !!token ? { 
    headers: { 
      Authorization: `Bearer ${token}`
    } 
  } : null
);

export const Get = (url, success, error) => {
  get(url)
    .then(({ data }) => success(data))
    .catch(({ response }) => error(response))
} 

export const Post = (url, data, success, error, token) => {
  const headers = getHeaders(token);
  post(api + url, data, !!headers && headers)
    .then(({ data }) => success(data))
    .catch(({ response }) => error(response));
}

export const Put = (url, data, success, error, token) => {
  const headers = getHeaders(token);
  put(url, data, !!headers && headers)
    .then(({ data }) => success(data))
    .catch(({ response }) => error(response));
}

export const Delete = (url, data, success, error, token) => {
  const headers = getHeaders(token);
  del(url, data, !!headers && headers)
    .then(({ data }) => success(data))
    .catch(({ response }) => error(response));
}