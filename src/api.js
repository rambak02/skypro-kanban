// const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function getCards({token}) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function authUser(name, login, password) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });
  const data = await response.json();
  return data;
}

export async function loginUser(login, password) {
  return await fetch("https://wedev-api.sky.pro/api/user/login", {
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
      return response.json().then((errorResponse) => {
        throw new Error(errorResponse.detail)
      })
    } else if (response.status === 201) {
      return response.json()
    }
  })
  .catch((error) => {
    throw error
  })
}
