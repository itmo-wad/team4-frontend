const actions = {
  addMessage: (item: any) => ({
    type: 'MESSAGE:ADD_MESSAGE',
    payload: item,
  }),
  deleteMessages: () => ({
    type: 'MESSAGE:DELETE_MESSAGES',
  }),
};

export default actions;
