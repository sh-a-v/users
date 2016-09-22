export const USER_OPEN_FORM = 'USER_OPEN_FORM';
export const USER_CLOSE_FORM = 'USER_CLOSE_FORM';

export const USER_CREATE = 'USER_ADD';
export const USER_UPDATE = 'USER_UPDATE';
export const USER_DELETE = 'USER_DELETE';

export const openForm = id => ({
  type: USER_OPEN_FORM,
  itemId: id
});

export const closeForm = () => ({
  type: USER_CLOSE_FORM
});

export const create = data => ({
  type: USER_CREATE,
  data
});

export const update = (id, data) => ({
  type: USER_UPDATE,
  itemId: id,
  data
});

export const del = id => ({
  type: USER_DELETE,
  itemId: id
});

