import { pick } from 'lodash';

const httpAdapter = require('axios/lib/adapters/http');

export const axiosSaneHttpAdapter = async (config: any) => {
  const prevStack = new Error().stack;

  try {
    return httpAdapter(config);
  } catch (error) {
    error.stack = [error.stack, prevStack].join('\n');

    error.data = {
      ...error.data,
      axios: {
        request: pick(config, 'headers', 'method', 'url', 'data', 'responseType'),
      },
    };

    if (error.response) {
      Object.assign(error.data.axios, {
        response: pick(error.response, 'data', 'status', 'statusText', 'headers'),
      });
    }

    throw error;
  }
};
