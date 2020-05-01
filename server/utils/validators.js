// Validation functions

// Email validation
const validateAddress = address => {
  // Implement address validation here
  return address;
};
const validatePhone = phoneNumber => {
  return phoneNumber;
}
const validateEmail = email => {
  const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/); // eslint-disable-line no-useless-escape
  return emailRegex.test(email);
};

const validators = {
  validateAddress: validateAddress,
  validatePhone: validatePhone,
  validateEmail: validateEmail
};

module.exports = validators;
