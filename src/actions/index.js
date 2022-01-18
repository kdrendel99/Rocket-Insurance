import axios from 'axios';
import * as c from './ActionTypes';
//stored action creators


// const testData = {
//   quote: {
//       quoteId: "UP5413263",
//       rating_address: {
//           line_1: "123 Mulberry Lane",
//           line_2: "3B",
//           city: "Brooklyn",
//           region: "NY",
//           postal: "11211"
//       },
//       policy_holder: {
//           first_name: "Prairie",
//           last_name: "Prairie"
//       },
//       variable_options: {
//           deductible: {
//               title: "Deductible",
//               description: "The amount of money you will pay in an insurance claim before the insurance coverage kicks in.",
//               values: [
//                   500,
//                   1000,
//                   2000
//               ]
//           },
//           asteroid_collision: {
//               title: "Asteroid Collision Limit",
//               description: "The maximum amount covered for damages caused by asteroid collisions.",
//               values: [
//                   100000,
//                   300000,
//                   500000,
//                   1000000
//               ]
//           }
//       },
//       variable_selections: {
//           deductible: 500,
//           asteroid_collision: 100000
//       },
//       premium: 6000
//   }
// }


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
        console.log('PUT error = ')
        console.log(error)
        dispatch(putQuoteFailure(error));
      });
  }
}