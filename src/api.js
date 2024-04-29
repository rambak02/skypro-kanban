const baseUrl = "https://wedev-api.sky.pro/api"

export async function getCards({token}) {
  const response = await fetch(baseUrl + "/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function authUser(name, login, password) {
  const response = await fetch(baseUrl + "/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });
    if (!response.ok) {
  const error = await response.json(); 
  throw new Error(error.error)
    } else if (response.status === 201) {
      return response.json()
    }
  }

export async function loginUser(login, password) {
  return await fetch(baseUrl + "/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      return response.json().then(() => {
        throw new Error('Неверный логин или пароль.')
      })
    } else if (response.status === 401) {
      return response.json().then(()=> {
        throw new Error('Пользователь не найден ')
      })
    } else if (response.status === 201) {
      return response.json()
    }
  })
  .catch((error) => {
    throw error
  })
}

export async function postToDo({title, topic, description, date, token}) {
const response = await fetch(baseUrl + "/kanban", {
  method: "POST", 
  body: JSON.stringify({
    title,
    topic,
    description,
    date
  }),
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
if (!response.ok) {
  const error = await response.json(); 
  throw new Error(error.error)
    } else if (response.status === 201) {
      return response.json()
    }
}