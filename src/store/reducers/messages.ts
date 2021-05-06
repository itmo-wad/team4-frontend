const initialState = {
  items: [],
  isInRoom: false,
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
    case 'MESSAGE:IS_IN_ROOM': {
      return {
        ...state,
        isInRoom: payload,
      };
    }
    default:
      return state;
  }
};
