import axios from 'axios';

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3000/api/services';
} else {
  baseUrl = '/api/services';
}

export const infoItems = {
  phone: '2310 029126',
  mobile: '6945 627619',
  location: 'Andrea Papandreou 18, Kalamaria 55132',
  linkedIn: 'Efthymiou Athanasios - Insurance Group',
  email: 'a.efthymiou60@gmail.com',
  facebook: 'Efthymiou Athanasios - Insurance Group',
};

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
