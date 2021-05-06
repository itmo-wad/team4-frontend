const actions = {
  addMessage: (item: any) => ({
    type: 'MESSAGE:ADD_MESSAGE',
    payload: item,
  }),
  deleteMessages: () => ({
    type: 'MESSAGE:DELETE_MESSAGES',
  }),
  setIsInRoom: (bool: boolean) => ({
    type: 'MESSAGE:IS_IN_ROOM',
    payload: bool,
  }),
};

export default actions;
