const url = 'http://192.168.1.84:3000'
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


var isClicked = false
var liveCycle = null
var progressBarRestore = null
export function showNotice(mode) {
  const toast = document.getElementById('toast')
  const progress = document.getElementById('progress')
  const cross = document.getElementById('cross')
  if (isClicked === false || mode === 'extra') {
    if (mode !== 'extra') {
      isClicked = null
      setTimeout(() => isClicked = true, 800)
    } else {
      setTimeout(() => isClicked = true, 800)
    }
    toast.classList.toggle('active')
    progress.classList.toggle('move')
    liveCycle = setTimeout(() => {
      toast.classList.toggle('active')
    }, 5000)
    progressBarRestore = setTimeout(() => {
      isClicked = false
      progress.classList.toggle('move')
    }, 5500)
    cross.onclick = () => {
      clearTimeout(liveCycle)
      clearTimeout(progressBarRestore)
      toast.classList.toggle('active')
      setTimeout(() => {
        progress.classList.toggle('move')
        isClicked = false
      }, 500)
    }
  }
  else if (isClicked === true){
    isClicked = null
    clearTimeout(liveCycle)
    clearTimeout(progressBarRestore)
    liveCycle = null
    progressBarRestore = null
    toast.classList.toggle('active')
    setTimeout(() => progress.classList.toggle('move'), 400)
    setTimeout(() => {
      showNotice('extra')
    }, 500)
  }
}


export async function getItems(filters) {
  let items= []
  let response = await fetch(url + '/get_items_id', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({filters: filters})
  })
  if (response.ok) {
    let data = await response.json()
    items = data.items
  }
  return items
}

export async function getSubjects() {
  let subjects;
  let response = await fetch(url + '/get_subjects', {
    method: 'GET',
    mode: 'cors',
  })
  if (response.ok) {
    let data = await response.json()
    subjects = data.subjects
  }
  return subjects
}

export function ucFirst(string) {
  return string[0].toUpperCase() + string.slice(1)
}

export function checkForm(data) {
  console.log(data)
  return false
}