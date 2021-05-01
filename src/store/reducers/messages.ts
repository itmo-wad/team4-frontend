const initialState = {
  items: [],
};

export default (state = initialState, { type, payload }: any) => {
  switch (type) {
    case 'MESSAGE:ADD_MESSAGE': {
      return {
        ...state,
        items: [
          ...state.items,
          payload,
        ],
      };
    }
    case 'MESSAGE:DELETE_MESSAGES': {
      return {
        ...state,
        items: [],
      };
    }
    default:
      return state;
  }
};
