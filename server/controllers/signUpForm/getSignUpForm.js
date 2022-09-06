const {readFile} = require('fs');
const {join} = require('path');

const readSignUpPage = (_, res) =>{
  readFile(
      join(__dirname, '..', '..', '..', 'public', 'signUpPage', 'index.html'),
      (err, data)=>{
        if (err) {
          console.error(err);
        }
        res.send({form: data.toString()});
      });
};

module.exports = readSignUpPage;
