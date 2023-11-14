/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *  name: Jobs
 *  description: API operations related to jobs
 */

/**
 * @swagger
 * /jobs:
 *  get:
 *    summary: Get all jobs
 *    description: Getting all job data
 *    tags: [Jobs]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *          minimum: 1
 *          default: 1
 *        description: Page number for pagination
 *    responses:
 *      '200':
 *        description: Successfull response
 *        content:
 *          application/json:
 *            example:
 *              - id: 1
 *                companies_id: 2
 *                name: "IT Support"
 *                description: "Work as IT Support"
 *                location: "Jakarta, Wakanda"
 *                category: "Technology"
 *                job_type: "WFH"
 *                salary: "3000000"
 *                capacity: 10
 *                is_open: true
 *                createdAt: "2023-11-11T13:42:11.304Z"
 *                updatedAt: "2023-11-11T13:42:11.304Z"
 *              - id: 2
 *                companies_id: 4
 *                name: "Human Resouces"
 *                description: "Work as Human Resouces"
 *                location: "Surabaya, Wakanda"
 *                category: "Human_Resources"
 *                job_type: "WFO"
 *                salary: "2500000"
 *                capacity: 5
 *                is_open: true
 *                createdAt: "2023-11-11T13:42:11.304Z"
 *                updatedAt: "2023-11-11T13:42:11.304Z"
 *      '401':
 *        $ref: '#/components/responses/InvalidToken'
 *      '403':
 *        $ref: '#/components/responses/PermissionDenied'
 *      '404':
 *        $ref: '#/components/responses/NotFound'
 *      '405':
 *        $ref: '#/components/responses/MethodNotAllowed'
 *      '500':
 *        $ref: '#/components/responses/InternalServerError'
 */
