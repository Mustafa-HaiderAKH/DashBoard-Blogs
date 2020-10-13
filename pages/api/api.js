const API = "https://mashriq.herokuapp.com/dash/v1/";
export const login = (data, callback) => {
  fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((e) => callback(e, null));
};
export const addArticle = (data, callback) => {
  fetch(`${API}/article`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((e) => callback(e, null));
};

export const getArtilces = (callback) => {
  fetch(`${API}/articles`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};
export const getOneData = (id, callback) => {
  fetch(`${API}/article/${id}`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};
export const editArticle = (id, data, callback) => {
  fetch(`${API}/article/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((e) => callback(e, null));
};
export const Regiser = (data, callback) => {
  fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((e) => callback(e, null));
};
export const deleteArticle = (id, callback) => {
  fetch(`${API}/article/${id} `, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((e) => callback(e, null));
};
