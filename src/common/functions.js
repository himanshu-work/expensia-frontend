export function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000);
  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
}

export function dateToString(date) {
  return date;
}

//flow select default from confid based on type
export function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
  //.padStart(2, "0"): The padStart method is used to ensure that the string has at least two characters
}
