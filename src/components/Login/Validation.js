// 이메일 체크
function CheckEmail(email) {
  const emailCheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailCheck.test(email);
}

// 패스워드 알파벳, 숫자, 특수문자 조합 8자리 이상 체크
function CheckPassword(pwd) {
  const checkPwd =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~`!@#$%^&*()-+=])[A-Za-z\d~`!@#$%^&*()-+=]{8,}$/;
  return checkPwd.test(pwd);
}

export { CheckEmail, CheckPassword };
