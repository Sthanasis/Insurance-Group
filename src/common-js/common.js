import axios from 'axios';

let baseUrl = '/api/services';
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:3000/api/services';
// } else {
//   baseUrl = '';
// }

export const sendEmail = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}/email`, data)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject({ err });
      });
  });
};
