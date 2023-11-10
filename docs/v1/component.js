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
