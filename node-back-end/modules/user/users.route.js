const userController = require("./uers.controller");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

module.exports = function (app) {
/**
 * @swagger
 * path:
 *  /users/:id:
 *    get:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
  app.get('/users/:id', userController.getUsers)
}