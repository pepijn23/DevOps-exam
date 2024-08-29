// TODO: Refactor validation function to follow the defined validations rules
/*
const isValid = () => Math.random() >= 0.5;

exports.isValid = isValid;
*/

function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
  }
  
  module.exports = { isLeapYear };