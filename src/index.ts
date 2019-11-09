import axios from 'axios';
import { axiosSaneHttpAdapter } from './http-adapter';

export const saneAxios = axios.create({
  adapter: axiosSaneHttpAdapter,
});
