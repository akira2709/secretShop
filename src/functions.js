const url = 'http://127.0.0.1:3000'

export default function slash(value) {
  if (value > 99999){
    value = value.toExponential(1).replace('+', '')
    return value
  }
  return value
}

export async function checkIsAuth() {
  let user;
  let cookie = document.cookie;
  let token = null;
  try { cookie = cookie.split('; ') } catch { /* empty */ }
  try { token = cookie.filter((el) => el.split('=')[0] === 'token')[0].split('=')[1] } catch { /* empty */ }
  if (token) {
    let response = await fetch(url + `/check_token/${token}`, {
      method: 'GET',
      mode: 'cors',
    })
    if (response.ok) {
      user = await response.json();
      document.cookie = `jwt_token=${user.jwt_token}`;
    }
    document.cookie = 'token=; max-age=-1';
  }
  return user;
}

export async function Auth() {
  let response = await fetch(url + '/get_token')
  if (response.ok) {
    let data = {
      token: String,
    }
    data = await response.json()
    document.cookie = `token=${data.token}`
    window.location.href = `https://t.me/meTWOme_bot?start=${data.token}`
  }
}

export async function checkJWT() {
  let user;
  let cookie = document.cookie;
  let jwtToken = null;
  try { cookie = cookie.split('; ') } catch { /* empty */ }
  try { jwtToken = cookie.filter((el) => el.split('=')[0] === 'jwt_token')[0].split('=')[1] } catch { /* empty */ }
  if (jwtToken) {
    let response = await fetch(url + `/check_jwt_token/${jwtToken}`, {
      method: 'GET',
      mode: 'cors',
    })
    if (response.ok) {
      user = await response.json();
      document.cookie = `jwt_token=${user.jwt_token}`;
    }
    else {
      document.cookie = 'jwt_token=; max-age=-1';
    }
  }
  return user;
}