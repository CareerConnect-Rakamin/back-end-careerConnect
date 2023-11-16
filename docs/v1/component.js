/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *  responses:
 *    InvalidToken:
 *      description: Invalid Token
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                example: Unauthorized - Invalid token
 *    MethodNotAllowed:
 *      description: HTTP Method yang dipakai tidak sesuai
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              status:
 *                type: integer
 *                example: 405
 *              message:
 *                type: string
 *                example: Method not allowed
 *              data:
 *                example: null
 *    InternalServerError:
 *      description: Internal Server Error
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                example: Internal Server Error
 *    NotFound:
 *      description: Didn't find the resource
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                example: Not Found
 *    PermissionDenied:
 *      description: Can't access the resource
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                example: Forbidden - User does not have Administrator privileges`
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Comapany:
 *       type: object
 *       properties:
 *         file:
 *           type: file
 *           format: file
 *           description: file of photo_profile
 *           example: photo.png
 *         name:
 *           type: string
 *           description: name of company
 *           example: comapany name
 *         type:
 *           type: string
 *           enum: [Technology,Healthcare,Finance,Education,Retail,Entertainment,Manufacturing,Consulting,Energy]
 *           description: type of company
 *           example: Energy
 *         description:
 *           type: string
 *           description: describe your company
 *           example: this company bla bla bla
 *         website:
 *           type: string
 *           description: websites oficial of company
 *           example: company.com
 *         email:
 *           type: string
 *           description: email of companay
 *           example: company@mail.com
 *         phone_number:
 *           type: string
 *           description: phone_number of company
 *           example: 02314687201
 *         address:
 *           type: string
 *           description: addres of company
 *           example: Jl.soekarno Hatta bla bla
 */
