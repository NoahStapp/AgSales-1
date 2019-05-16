export default class LoginModel {
  loginUser(userData) {
    console.log(userData);
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: userData
    })
      .then(result => result.json())
      .then(info => {
        console.log(info);
      });
  }
}
