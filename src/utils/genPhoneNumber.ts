export const generatePhoneNumber = (value: string): string => {
  let number = 0;

  for (let i = 0; i < value.length; i++) {
    const charCode = value[i].charCodeAt(0);
    number = number * 10 + charCode;

    if (number.toString().length === 7) {
      return number.toString();
    }
  }

  return "0000000";
};
