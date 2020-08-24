const User = require('./users.model');
const Team = require('../team/team.model');

module.exports = {
  getUsers: (req, res) => {
    console.log(req.params);
    User.findOne({})
      .populate('favTeam')
      .lean()
      .exec((err, result) => {
        console.log(err);
        res.status(200).send(result)
      })
  }
}