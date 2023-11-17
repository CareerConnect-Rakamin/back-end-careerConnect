/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *   responses:
 *     NotFound:
 *       description: Resource not found
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Not found
 *     InvalidToken:
 *       description: Invalid token provided
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Invalid token
 *     InvalidInput:
 *       description: Invalid input provided
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Invalid input
 *     PermissionDenied:
 *       description: Permission denied
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: You don't have access
 *     MethodNotAllowed:
 *       description: Method not allowed
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Method not allowed
 *     InternalServerError:
 *       description: Internal server error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                  example: failed
 *               message:
 *                  example: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     company:
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
 *           example: company name
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
 *     jobs:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of job
 *           example: Backend Developer
 *         description:
 *           type: string
 *           description: describe the job
 *           example: Making Backend Environment for an event
 *         location:
 *           type: string
 *           description: Location of Job
 *           example: Jakarta, Wakanda
 *         category:
 *           type: string
 *           enum: [Information, Technology, Healthcare, Finance, Education, Sales, Marketing, Engineering, Customer_Service, Human_Resources]
 *           description: Category of Job
 *           example: Technology
 *         job_type:
 *           type: string
 *           enum: [WFH, WFO]
 *           description: Type of working is it Work From Office or Home
 *           example: WFH
 *         salary:
 *           type: bigInteger
 *           minimum: 1000
 *           description: Salary for the job
 *           example: 5000000
 *         capacity:
 *           type: integer
 *           minimum: 1
 *           description: Capacity for the job
 *           example: 15
 */
