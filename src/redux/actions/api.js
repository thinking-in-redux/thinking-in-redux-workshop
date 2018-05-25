export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR   = 'API_ERROR';

export const apiRequest = ({ method, url, body, feature }) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: {method, url, feature}
});

export const apiSuccess = (data, feature) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: data,
  meta: {feature}
});

export const apiError = (error, feature) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: {feature}
});


