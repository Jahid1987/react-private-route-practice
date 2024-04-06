function validateEmail(email) {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  return emailRegex.test(email);
}

function validateNumber(number) {
  const numberRegex = /^-?\d+(\.\d+)?$/;
  return numberRegex.test(number);
}

function isStrongPassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  return passwordRegex.test(password);
}
export { validateEmail, validateNumber, isStrongPassword };
