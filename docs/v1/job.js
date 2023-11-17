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
 *            schema:
 *              type: object
 *              properties:
 *                      status:
 *                          example: Success
 *                      data:
 *                          example:
 *                                - id: 1
 *                                  companies_id: 2
 *                                  name: "IT Support"
 *                                  description: "Work as IT Support"
 *                                  location: "Jakarta, Wakanda"
 *                                  category: "Technology"
 *                                  job_type: "WFH"
 *                                  salary: "3000000"
 *                                  capacity: 10
 *                                  is_open: true
 *                                  createdAt: "2023-11-11T13:42:11.304Z"
 *                                  updatedAt: "2023-11-11T13:42:11.304Z"
 *                                - id: 2
 *                                  companies_id: 4
 *                                  name: "Human Resouces"
 *                                  description: "Work as Human Resouces"
 *                                  location: "Surabaya, Wakanda"
 *                                  category: "Human_Resources"
 *                                  job_type: "WFO"
 *                                  salary: "2500000"
 *                                  capacity: 5
 *                                  is_open: true
 *                                  createdAt: "2023-11-11T13:42:11.304Z"
 *                                  updatedAt: "2023-11-11T13:42:11.304Z"
 *      '400':
 *        $ref: '#/components/responses/InvalidInput'
 *      '405':
 *        $ref: '#/components/responses/MethodNotAllowed'
 *      '500':
 *        $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create Job
 *     description: Creating Job
 *     tags: [Jobs]
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/jobs'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    status:
 *                      example: Success
 *                    message:
 *                      example: Job Created
 *       '400':
 *         $ref: '#/components/responses/InvalidInput'
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '409':
 *         description: Already exist
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    status:
 *                      example: failed
 *                    message:
 *                      example: Jobs already exists
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get Job by id
 *     description: Getting job data by id
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to getting data job
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                      example: Success
 *                    data:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                          example: 1
 *                        companies_id:
 *                          type: integer
 *                          example: 2
 *                        name:
 *                          type: string
 *                          example: IT Support
 *                        description:
 *                          type: string
 *                          example: Work as IT Support
 *                        location:
 *                          type: string
 *                          example: Jakarta, Wakanda
 *                        category:
 *                          type: string
 *                          example: Technology
 *                        job_type:
 *                          type: string
 *                          example: WFH
 *                        salary:
 *                          type: string
 *                          example: "3000000"
 *                        capacity:
 *                          type: integer
 *                          example: 10
 *                        is_open:
 *                          type: boolean
 *                          example: true
 *                        createdAt:
 *                          type: string
 *                          format: date-time
 *                          example: "2023-11-16T16:23:00.922Z"
 *                        updatedAt:
 *                          type: string
 *                          format: date-time
 *                          example: "2023-11-16T16:23:00.922Z"
 *       '400':
 *          $ref: '#/components/responses/InvalidInput'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobs/company/{id}:
 *   get:
 *     summary: Get Job by company id
 *     description: Getting job data by company id
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of company to getting data job
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                      example: Success
 *                    data:
 *                          example:
 *                                - id: 1
 *                                  companies_id: 2
 *                                  name: "IT Support"
 *                                  description: "Work as IT Support"
 *                                  location: "Jakarta, Wakanda"
 *                                  category: "Technology"
 *                                  job_type: "WFH"
 *                                  salary: "3000000"
 *                                  capacity: 10
 *                                  is_open: true
 *                                  createdAt: "2023-11-11T13:42:11.304Z"
 *                                  updatedAt: "2023-11-11T13:42:11.304Z"
 *                                - id: 3
 *                                  companies_id: 2
 *                                  name: "Backend Developer"
 *                                  description: "Making Backend Environment for an event"
 *                                  location: "Jakarta, Wakanda"
 *                                  category: "Technology"
 *                                  job_type: "WFH"
 *                                  salary: 5000000
 *                                  capacity: 10
 *                                  is_open: true
 *                                  createdAt: "2023-11-16T19:14:25.097Z"
 *                                  updatedAt: "2023-11-16T19:14:25.097Z"
 *       '400':
 *          $ref: '#/components/responses/InvalidInput'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Edit Job by id
 *     description: Edit job data by id
 *     tags: [Jobs]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: Name of job
 *                  example: Backend Developer
 *                description:
 *                  type: string
 *                  description: describe the job
 *                  example: Making Backend Environment for an event
 *                location:
 *                  type: string
 *                  description: Location of Job
 *                  example: Jakarta, Wakanda
 *                category:
 *                  type: string
 *                  enum: [Information, Technology, Healthcare, Finance, Education, Sales, Marketing, Engineering, Customer_Service, Human_Resources]
 *                  description: Category of Job
 *                  example: Technology
 *                job_type:
 *                  type: string
 *                  enum: [WFH, WFO]
 *                  description: Type of working is it Work From Office or Home
 *                  example: WFH
 *                salary:
 *                  type: bigInteger
 *                  minimum: 1000
 *                  description: Salary for the job
 *                  example: 5000000
 *                capacity:
 *                  type: integer
 *                  minimum: 1
 *                  description: Capacity for the job
 *                  example: 15
 *                is_open:
 *                  type: boolean
 *                  description: the jobs is open or close
 *                  example: true
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    status:
 *                      example: Success
 *                    message:
 *                      example: Job Updated
 *       '400':
 *         $ref: '#/components/responses/InvalidInput'
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '403':
 *         $ref: '#/components/responses/PermissionDenied'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       '409':
 *         description: Already exist
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                    status:
 *                      example: failed
 *                    message:
 *                      example: Jobs already exists
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete Job by id
 *     description: Delete job data by id
 *     tags: [Jobs]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of job to delete
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                      example: Success
 *                    message:
 *                      type: string
 *                      example: Job Deleted
 *       '400':
 *          $ref: '#/components/responses/InvalidInput'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
