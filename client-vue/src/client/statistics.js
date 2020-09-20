import client from './client';

export const loadStatistics = params => {
  return client({
    url: '/statistics',
    method: 'GET',
    params
  });
};
