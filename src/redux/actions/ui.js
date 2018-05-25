export const SET_LOADER = 'SET_LOADER';
export const SET_NOTIFICATION = 'SET_NOTIFICATION';

export const setLoader = ({flag, feature}) => ({
  type: `${feature} ${SET_LOADER}`,
  payload: flag,
  meta: {feature}
});

export const setNotification = ({notification, feature}) => ({
  type: `${feature} ${SET_NOTIFICATION}`,
  payload: notification,
  meta: {feature}
});
