import * as c from './../actions/ActionTypes';

const initialState = {
  isLoading: false,
  quote: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type){
      case c.REQUEST_POST_QUOTE:
        return Object.assign({}, state, {
          isLoading: true
      });
      case c.POST_QUOTE_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          quote: action.quote
      });
        case c.POST_QUOTE_FAILURE:
          return Object.assign({}, state, {
            isLoading: false, 
            error: action.error
        })
        case c.REQUEST_PUT_QUOTE:
          return Object.assign({}, state, {
            isLoading: true
        });
        case c.PUT_QUOTE_SUCCESS:
          return Object.assign({}, state, {
            isLoading: false,
            quote: action.quote
        });
          case c.PUT_QUOTE_FAILURE:
            return Object.assign({}, state, {
              isLoading: false, 
              error: action.error
          })
      default:
        return state;
  }
};