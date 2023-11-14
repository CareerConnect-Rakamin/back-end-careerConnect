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
 *           example:
 *             error: Resource not found
 *     InvalidToken:
 *       description: Invalid token provided
 *       content:
 *         application/json:
 *           example:
 *             error: Invalid token
 *     PermissionDenied:
 *       description: Permission denied
 *       content:
 *         application/json:
 *           example:
 *             error: Permission denied
 *     MethodNotAllowed:
 *       description: Method not allowed
 *       content:
 *         application/json:
 *           example:
 *             error: Method not allowed
 *     InternalServerError:
 *       description: Internal server error
 *       content:
 *         application/json:
 *           example:
 *             error: Internal server error
 */

/**
 * @swagger
 * tags:
 *   name: Companies API
 *   description: API operations of companies
 */

/**
 * @swagger
 * /companies:
 *   get:
 *     summary: Get all companies
 *     description: Retrieve a list of all companies
 *     tags: [companies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 companies_id: 2
 *                 name: "IT Support"
 *                 description: "Work as IT Support"
 *                 location: "Jakarta, Wakanda"
 *                 category: "Technology"
 *                 job_type: "WFH"
 *                 salary: "3000000"
 *                 capacity: 10
 *                 is_open: true
 *                 createdAt: "2023-11-11T13:42:11.304Z"
 *                 updatedAt: "2023-11-11T13:42:11.304Z"
 *               - id: 2
 *                 companies_id: 4
 *                 name: "Human Resources"
 *                 description: "Work as Human Resources"
 *                 location: "Surabaya, Wakanda"
 *                 category: "Human_Resources"
 *                 job_type: "WFO"
 *                 salary: "2500000"
 *                 capacity: 5
 *                 is_open: true
 *                 createdAt: "2023-11-11T13:42:11.304Z"
 *                 updatedAt: "2023-11-11T13:42:11.304Z"
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '405':
 *         $ref: '#/components/responses/MethodNotAllowed'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
