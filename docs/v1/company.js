/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: Companies
 *   description: API operations related to company
 */

/**
 * @swagger
 * /companies:
 *   get:
 *     summary: Get all companies
 *     description: Retrieve a list of all companies
 *     tags: [Companies]
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
 *              schema:
 *                  type: object
 *                  properties:
 *                      status:
 *                          example: Success
 *                      data:
 *                          example:
 *                                  - id: 2
 *                                    photo_profile: "public/uploads/default/company.png"
 *                                    name: "TechCompany"
 *                                    type: "Technology"
 *                                    description: "This is our TechCompany"
 *                                    website: "www.techcompany.com"
 *                                    email: "techcompany@gmail.com"
 *                                    phone_number: "+62852123456789"
 *                                    address: "Jakarta, Wakanda"
 *                                    createdAt: "2023-11-16T16:23:00.902Z"
 *                                    updatedAt: "2023-11-16T16:23:00.902Z"
 *                                  - id: 4
 *                                    photo_profile: "public/uploads/default/company.png"
 *                                    name: "HealthCare"
 *                                    type: "Healthcare"
 *                                    description: "This is our HealthCare Company"
 *                                    website: "www.healthcompany.com"
 *                                    email: "healthcompany@gmail.com"
 *                                    phone_number: "+62852123423789"
 *                                    address: "Surabaya, Wakanda"
 *                                    createdAt: "2023-11-16T16:23:00.902Z"
 *                                    updatedAt: "2023-11-16T16:23:00.902Z"
 *                                  - id: 6
 *                                    photo_profile: "public/uploads/default/company.png"
 *                                    name: "MakinPaper"
 *                                    type: "Manufacturing"
 *                                    description: "This is our Making Paper Company"
 *                                    website: "www.papercompany.com"
 *                                    email: "papercompany@gmail.com"
 *                                    phone_number: "+62852124456789"
 *                                    address: "Bandung, Wakanda"
 *                                    createdAt: "2023-11-16T16:23:00.902Z"
 *                                    updatedAt: "2023-11-16T16:23:00.902Z"
 *       '400':
 *         $ref: '#/components/responses/InvalidInput'
 *       '405':
 *         $ref: '#/components/responses/MethodNotAllowed'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /companies/{id}:
 *   get:
 *     summary: Get Company by id
 *     description: Getting company data by id
 *     tags: [Companies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of company to getting data company
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                  type: object
 *                  properties:
 *                      status:
 *                          example: Success
 *                      data:
 *                          type: object
 *                          properties:
 *                                  id:
 *                                      type: integer
 *                                      example: 2
 *                                  photo_profile:
 *                                      type: string
 *                                      example: "public/uploads/default/company.png"
 *                                  name:
 *                                      type: string
 *                                      example: "TechCompany"
 *                                  type:
 *                                      type: string
 *                                      example: "Technology"
 *                                  description:
 *                                      type: string
 *                                      example: "This is our TechCompany"
 *                                  website:
 *                                      type: string
 *                                      example: "www.techcompany.com"
 *                                  email:
 *                                      type: string
 *                                      example: "techcompany@gmail.com"
 *                                  phone_number:
 *                                      type: string
 *                                      example: "+62852123456789"
 *                                  address:
 *                                      type: string
 *                                      example: "Jakarta, Wakanda"
 *                                  createdAt:
 *                                      type: string
 *                                      format: date-time
 *                                      example: "2023-11-16T16:23:00.902Z"
 *                                  updatedAt:
 *                                      type: string
 *                                      format: date-time
 *                                      example: "2023-11-16T16:23:00.902Z"
 *       '400':
 *          $ref: '#/components/responses/InvalidInput'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /companies/{id}:
 *   put:
 *     summary: Update company by id
 *     description: Updating company by id
 *     tags: [Companies]
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: id of company to getting data company
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/company'
 *           example:
 *               - file: "photo-profile.png"
 *                 name: "Company name"
 *                 type: "Technology"
 *                 description: "this company into to startup un unicorn"
 *                 website: "company.com"
 *                 email: "company@mail.com"
 *                 phone_number: "099890265281"
 *                 address: "Jl soekarno hatta"
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             example:
 *               - message: "Succes"
 *               - id: 1
 *                 file: "file-1699837993051.png"
 *                 name: "Company name"
 *                 type: "Technology|Healthcare|Finance|Education|Retail|Entertainment|Manufacturing|Consulting|Energy"
 *                 description: "sedang di update"
 *                 website: "company.com"
 *                 email: "company@mail.com"
 *                 phone_number: "099890265281"
 *                 address: "Jl soekarno hatta"
 *                 createdAt: "2023-11-11T07:21:10.716Z"
 *                 updatedAt: "2023-11-13T01:13:13.118Z"
 *       '400':
 *          description: Bad request
 *          content:
 *            application/json:
 *              example:
 *                - message: "Invalid form"
 *       '401':
 *         $ref: '#/components/responses/InvalidToken'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
