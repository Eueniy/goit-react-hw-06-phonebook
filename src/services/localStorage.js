export function getContactsFromLS() {
  try {
    return JSON.parse(localStorage.getItem("contacts"));
  } catch {
    return undefined;
  }
}

export function saveContactsToLS(contacts) {
  return localStorage.setItem("contacts", JSON.stringify(contacts));
}
