/**
 * @swagger
 * components:
 *  $ref: './components.js#/components'
 */

/**
 * @swagger
 * tags:
 *   name: Register
 *   description: API operations related to user registration
 */

/**
 * @swagger
 * /register/jobseekers:
 *   post:
 *     summary: User Registration
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterJobseekers'
 *           example:
 *             full_name: John Doe
 *             email: john.doe@example.com
 *             password: secret123
 *             gender: male
 *             phone_number: +1234567890
 *             address: 123 Main Street
 *             date_of_birth: 1990-01-01
 *     responses:
 *       200:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
 *       400:
 *         description: Invalid Input
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error400'
 *       405:
 *         $ref: '#/components/responses/MethodNotAllowed'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */

/**
 * @swagger
 * /register/companies:
 *   post:
 *     summary: Company Registration
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterCompaniesInput'
 *           example:
 *             name: ABC Corporation
 *             email: abc.corp@example.com
 *             password: secret456
 *             address: 456 Business Street
 *             phone_number: +9876543210
 *             type: Technology
 *             website: http://www.abc-corp.com
 *     responses:
 *       200:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
 *       400:
 *         description: Invalid Input
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error400'
 *       405:
 *         $ref: '#/components/responses/MethodNotAllowed'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
