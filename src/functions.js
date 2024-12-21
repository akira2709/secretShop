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
      if (!data.name || !data.price || !data.description || !data.file || data.name.includes('ㅤ') || data.price.includes('ㅤ') || data.description.includes('ㅤ') || !data.class) {
          return {title: 'Ошибка!', content: 'Заполните все поля'}
        }
      break;
    case 'order':
      if (!data.name || !data.price || (!data.description && !data.file) || data.name.includes('ㅤ') || data.price.includes('ㅤ') || data.description.includes('ㅤ') || !data.class) {
        return {title: 'Ошибка!', content: 'Одно из обязательных полей не заполнено'}
      }
      break;
  }
  return true
}

export async function sendForm(params) {
  const request = async (data) => {
    let title;
    let content;
    let response = await fetch(url + `/save_item`, {
      method: 'POST', 
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data}),
    })
    if (response.ok) {
      let res = await response.json()
      title = 'Успех!'
      content = res.message
    } else {
      let res = await response.json()
      title = 'Ошибка!'
      content = res.error
    }
    return {title: title, content: content}
  }
  let data = Object.assign({}, params)
  const read = (data) => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = () => {
        data.file = reader.result
        resolve(data)
      }
      reader.readAsDataURL(data.file)
    })
  }

  const reformedData = await read(data)
  const response = await request(reformedData)
  return response

}

export async function getItemsAuthor(author) {
  let items = [];
  const response = await fetch(url + `/get_items_author/${author}`, {
    method: 'GET',
    mode: 'cors',
  })
  if (response.ok) {
    let data = await response.json()
    items = data;
  }
  return items
}

export class Item {
  constructor(params) {
    this.id = params.id || 'loading...'
    this.name = params.name || 'loading...'
    this.price = params.price || 'loading...'
    this.author = params.author || 'loading...'
    this.subject = params.subject || 'loading...'
    this.type = params.type || 'loading...'
    this.date = params.date || 'loading...'
    this.rating = params.rating ?? 'loading...'
    this.process = params.process ?? undefined
    this.orderOrOffer = params.oreder_or_offer || 'loading...'
    this.description = params.description || 'loading...'
    this.file = params.file || 'loading...'
  }
}