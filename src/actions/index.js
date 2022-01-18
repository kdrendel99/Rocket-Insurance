import axios from 'axios';
import * as c from './ActionTypes';
//stored action creators


export const requestPostQuote = () => ({
  type: c.REQUEST_POST_QUOTE
});

export const postQuoteSuccess = (quote) => ({
  type: c.POST_QUOTE_SUCCESS,
  quote
});

export const postQuoteFailure = (error) => ({
  type: c.POST_QUOTE_FAILURE,
  error
});

export const requestPutQuote = () => ({
  type: c.REQUEST_PUT_QUOTE
});

export const putQuoteSuccess = (quote) => ({
  type: c.PUT_QUOTE_SUCCESS,
  quote
});

export const putQuoteFailure = (error) => ({
  type: c.PUT_QUOTE_FAILURE,
  error
});

export const callPostRequest = (quote) => {
  return dispatch => {
    dispatch(requestPostQuote());
    return axios.post('https://fed-challenge-api.sure.now.sh/api/v1/quotes', quote)
    .then(
      (response) => {
        console.log('POST response = ', response)
        dispatch(postQuoteSuccess(response.data.quote));
      })
      .catch((error) => {
        console.log('POST error = ', error)
        dispatch(postQuoteFailure(error));
      });
  }
}

export const callPutRequest = (quote) => {
  return dispatch => {
    dispatch(requestPutQuote());
    return axios.put(`https://fed-challenge-api.sure.now.sh/api/v1/quotes/${quote.quote.quoteId}`, JSON.stringify(quote))
    .then(
      (response) => {
        console.log('PUT response = ', response)
        dispatch(putQuoteSuccess(response.data.quote));
      })
      .catch((error) => {
        console.log('PUT error = ',error)
        dispatch(putQuoteFailure(error));
      });
  }
}