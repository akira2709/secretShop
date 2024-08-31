const url = 'http://192.168.1.94:3000'
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


export function showNotice(title = '', content = '', notices) {
  notices.push({title: title, content: content})
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
  switch (data.orderOrOffer) {
    case 'offer':
      if (!data.name || !data.price || !data.description || !data.file || data.name.includes('ㅤ') || data.price.includes('ㅤ') || data.description.includes('ㅤ')) {
          return {title: 'Ошибка!', content: 'Заполните все поля'}
        }
    case 'order':
      if (!data.name || !data.price || (!data.description && !data.file) || data.name.includes('ㅤ') || data.price.includes('ㅤ') || data.description.includes('ㅤ')) {
        return {title: 'Ошибка!', content: 'Одно из обязательных полей не заполнено'}
      }
  }
  return true
}

export async function sendForm(data) {
  let notice = {
    title: '',
    content: ''
  }
  const blob = new Blob([data.file], { type: data.file.type });
  data.file = data.file.name;
  const formData = new FormData()
  formData.append('file', blob)
  formData.append('data', data)
  let response = await fetch(url + `/save_item`, {
    method: 'POST', 
    mode: 'cors',
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: formData,
  })
  if (response.ok) {
    let content = await response.json()
    notice.title = 'Успех!'
    notice.content = content.message
  } else {
    notice.title = 'Ошибка!'
    notice.content = 'Данные не были сохранены, повторите отпрваку'
  }
  return notice
}