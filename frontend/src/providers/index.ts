import axios from 'axios';

export const marketData = axios.create({
  baseURL: 'http://elb-1935872.us-east-2.elb.amazonaws.com',
});
