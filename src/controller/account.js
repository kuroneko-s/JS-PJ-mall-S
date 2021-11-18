import { logger } from "../../middleware";

export const accountFind = (req, res) => res.render("accountFind");

export const accountGetRegister = (req, res) => {
  res.render("accountRegister");
};

export const accountPostRegister = (req, res) => {
  //   logger.info(`url - ${req.originalUrl}, form data - ${req.body}`);
  const { account, password, gender, name, year, month, day, notification } =
    req.body;
  let result = true;
  // TODO : 중복체크 (account)
  // TODO : password DB 저장시 암호화

  logger.info(
    `request Path ${req.originalUrl}, value - ` +
      `account: ${account}, gender: ${gender}, name: ${name},` +
      `year: ${year}, month: ${month}, day: ${day}, notification: ${notification}`
  );

  res.status(200).redirect(`/?success=${result}`);
};
