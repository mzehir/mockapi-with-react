function setItem(key, data) {
  localStorage.setItem(key, data);
}

function getItem(key) {
  return localStorage.getItem(key);
}

//------------------------------------

export function localStorageSetCart(data) {
  setItem("cart", data);
}

export function localStorageSetAmount(data) {
  setItem("totalAmount", data);
}

export function localStorageGetCart() {
  let result = getItem("cart");
  return result ? JSON.parse(result) : [];
}

export function localStorageGetAmount() {
  let result = getItem("totalAmount");
  return result ? result : "";
}
