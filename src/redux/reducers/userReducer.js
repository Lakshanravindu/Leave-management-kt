const initialState = {
    currentUser: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          currentUser: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  