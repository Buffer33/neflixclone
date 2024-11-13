export const validation = (email, Password) => {
  const checkEmail = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const checkPass = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(
    Password
  );
  if (!checkEmail) return "Email is not Valid";
  if (!checkPass) return "Password is not Valid";
};
