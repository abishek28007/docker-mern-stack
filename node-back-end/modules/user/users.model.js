const mongoose = require("mongoose");
Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  screenName: String,
  favTeam: {
    type: Schema.ObjectId,
    default: null,
    ref: 'Teams'
  }
});

module.exports = mongoose.model('Users', userSchema)

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - username
 *          - screenName
 *        properties:
 *          username:
 *            type: string
 *          screenName:
 *            type: string
 *            description: screen name of user needs to be unique.
 *          favTeam:
 *            type: string
 *            description: favourite team.
 *        example:
 *           name: Alexander
 *           email: fake@email.com
 */