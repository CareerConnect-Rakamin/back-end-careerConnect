/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: Comapany
 *   description: API operations related to Comapany
 */

/**
 * @swagger
 * /company/{id}:
 *   get:
 *     summary: Get Company by id
 *     description: Getting company data by id
 *     tags: [comapny]
 *     security:
 *        - bearerAuth: []
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
 *             example:
 *               - message: "Succes"
 *               - id: 1
 *                 photo_profile: "file-1699837993051.png"
 *                 name: "Company name"
 *                 type: "Technology|Healthcare|Finance|Education|Retail|Entertainment|Manufacturing|Consulting|Energy"
 *                 description: "sedang di update"
 *                 website: "company.com"
 *                 email: "company@mail.com"
 *                 phone_number: "099890265281"
 *                 address: "disana rumah saya"
 *                 createdAt: "2023-11-11T07:21:10.716Z"
 *                 updatedAt: "2023-11-13T01:13:13.118Z"
 *       '400':
 *          description: Bad request
 *          content:
 *            application/json:
 *              example:
 *                - message: "Invalid form"
 *       '401':
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              example:
 *                - message: "Token akses tidak valid atau kedaluwarsa."
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /company/{id}:
 *   put:
 *     summary: Update company by id
 *     description: Updating company by id
 *     tags: [comapny]
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
 *             $ref: '#/components/schemas/Company'
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
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              example:
 *                - message: "Token akses tidak valid atau kedaluwarsa."
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
