const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateId = (length: number = 5) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const onValidateFields = (
  title: string,
  time: string
): string | true => {
  if (!title || !time) {
    return "All fields are required.";
  }
  if (title.trim().length > 128) {
    return "Title should not be more than 128 characters.";
  }
  if (!/^[0-9]*$/.test(time)) {
    return "Time should be a number.";
  }
  if (Number(time) < 0 || Number(time) > 24) {
    return "Time range should be between 0 - 24.";
  }
  return true;
};

export const formatValue = (value: string) => {
  if (value.trim().length === 1) {
    return `00${value}`;
  }
  if (value.trim().length === 2) {
    return `0${value}`;
  }
  return value;
};
