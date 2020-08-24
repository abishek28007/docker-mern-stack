const Match = require('../match/match.model');
const Team = require('../team/team.model');

module.exports = {
  getMatchList: (req, res) => {
    console.log('found');
    Match.find({})
      .populate('winner.team')
      .populate('teams.team')
      .populate('toss.winner')
      .lean()
      .exec((err, result) => {
        res.status(200).json({
          data: result
        });
      })
  }
}