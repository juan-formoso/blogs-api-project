// Referência utilizada para construção da validação de email: 
// https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

const emailRegex = (email) => {
  const regex = /[a-z0-9]+@[a-z]+[a-z]{2,3}/;
  return regex.test(email);
};

const emailIsValid = (email) => {
  if (!email) return { code: 400, message: '"email" is required' };
  if (!emailRegex(email)) return { code: 400, message: '"email" must be a valid email' };
};

const userValidation = (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  
  const emailValidation = emailIsValid(email);
  if (emailValidation) { 
    return res.status(emailValidation.code).json({ message: emailValidation.message });
  }
  
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

module.exports = userValidation;
