//- Get the token sent through the frontend and validate it using jwt.verify()
//-
//- Logic:
//-   . if the token valid: go ahead and serve the request
//-   . else: return a response using json object to signal error
const { verify } = require('jsonwebtoken');

//- Create a middleware (a function with req, res, and next)
//-   . req: get stuff from the request
//-   . res: send stuff back
//-   . next: allow the request to move forward
const validateToken = (req, res, next) => {
  //-- get the access token being passed in the header
  const resetToken = req.header('resetToken');

  //-- if user are not logged in (no access token found),
  //--   send back an error object
  if (!resetToken) {
    console.log(resetToken);
    return res.json({ error: 'Invalid request' });
  }

  //-- if there is a token, verify that it is valid
  try {
    //-- compare with the secret string
    const validToken = verify(resetToken, 'energyRANDOMsecret');

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };