export const USERS = '[Users]';

export const FETCH_USERS = `${USERS} Fetch`;
export const SET_USERS = `${USERS} Set`;

export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const setUsers = (users, key = null) => ({
  type: SET_USERS,
  payload: users,
  meta: {key, feature: USERS}
});
