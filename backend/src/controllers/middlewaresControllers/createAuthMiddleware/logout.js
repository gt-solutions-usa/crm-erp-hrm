const mongoose = require('mongoose');

const logout = async (req, res, { userModel }) => {
  const UserPassword = mongoose.model(userModel + 'Password');

  const token = req.cookies.token;
  
  // const tempToken = "sss"
  await UserPassword.findOneAndUpdate(
    { user: req.admin._id },
    // { $pull: { loggedSessions: tempToken } },
    { $pull: { loggedSessions: token } },
    {
      new: true,
    }
  ).exec();

  res
    .clearCookie('token', {
      maxAge: null,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
      domain: req.hostname,
      Path: '/',
    })
    .json({
      success: true,
      result: {},
      message: 'Successfully logout',
    });
};

module.exports = logout;
