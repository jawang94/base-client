/* eslint-disable import/prefer-default-export */

export const encodeURL = (url: string, blockId: string) => {
  const rootDomain = 'https://www.notion.so/image/';
  const encodedURL = encodeURIComponent(url).replace(/%20/g, '+');
  const table = '?table=block';
  const id = `&id=${blockId}`;
  const width = `&width=${40}`;
  const userId = '&userId=';
  const cache = '&cache=v2';

  const URL = `${rootDomain}${encodedURL}${table}${id}${width}${userId}${cache}`;

  return URL;
};
