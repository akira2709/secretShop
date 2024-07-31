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
  let token = null;
  try { token = localStorage.getItem('token') } catch { /* empty */ }
  if (token) {
    let response = await fetch(url + `/check_token/${token}`, {
      method: 'GET',
      mode: 'cors',
    })
    if (response.ok) {
      user = await response.json();
      localStorage.setItem('jwt_token', user.jwt_token)
    }
    localStorage.removeItem('token')
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
    localStorage.setItem('token', data.token)
    window.location.href = `https://t.me/meTWOme_bot?start=${data.token}`
  }
}

export async function checkJWT() {
  let user;
  let jwtToken = null;
  try { jwtToken = localStorage.getItem('jwt_token') } catch { /* empty */ }
  if (jwtToken) {
    let response = await fetch(url + `/check_jwt_token/${jwtToken}`, {
      method: 'GET',
      mode: 'cors',
    })
    if (response.ok) {
      user = await response.json();
      localStorage.setItem('jwt_token', user.jwt_token)
    }
    else {
      localStorage.removeItem('jwt_token')
    }
  }
  return user;
}


export async function getItem(itemId) {
  let item;
  let response = await fetch(url + `/get_item/${itemId}`, {
    method: 'GET',
    mode: 'cors',
  })
  if (response.ok) {
    item = await response.json()
  }
  return item;
}


export async function removeFromBasket(itemId, userId) {
  let user;
  let response = await fetch(url + `/remove_from_basket/${itemId}/${userId}`, {
    method: 'GET',
    mode: 'cors',
  })
  if (response.ok) {
    user = await response.json()
  }
  return user;
}