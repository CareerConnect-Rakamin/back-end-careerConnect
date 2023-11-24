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
 *  schemas:
 * RegisterJobseekers:
 *      type: object
 *      properties:
 *        full_name:
 *          type: string
 *          description: Full name of the user
 *        email:
 *          type: string
 *          format: email
 *          description: Email address of the user
 *        password:
 *          type: string
 *          description: User password (at least 8 characters)
 *        gender:
 *          type: string
 *          description: Gender of the user
 *        phone_number:
 *          type: string
 *          description: Phone number of the user
 *        address:
 *          type: string
 *          description: Address of the user
 *        date_of_birth:
 *          type: string
 *          format: date
 *          description: Date of birth of the user
 *      required:
 *        - full_name
 *        - email
 *        - password
 *        - gender
 *        - phone_number
 *        - address
 *        - date_of_birth
 *      example:
 *        full_name: John Doe
 *        email: john.doe@example.com
 *        password: secret123
 *        gender: male
 *        phone_number: +1234567890
 *        address: 123 Main Street
 *        date_of_birth: 1990-01-01
 *
 *     RegisterCompanyInput:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Name of the company
 *        email:
 *          type: string
 *          format: email
 *          description: Email address of the company
 *        password:
 *          type: string
 *          description: Company password (at least 8 characters)
 *        address:
 *          type: string
 *          description: Address of the company
 *        phone_number:
 *          type: string
 *          description: Phone number of the company
 *        type:
 *          type: string
 *          description: Type of the company
 *        website:
 *          type: string
 *          format: uri
 *          description: Website URL of the company
 *      required:
 *        - name
 *        - email
 *        - password
 *        - address
 *        - phone_number
 *        - type
 *        - website
 *      example:
 *        name: ABC Corporation
 *        email: abc.corp@example.com
 *        password: secret456
 *        address: 456 Business Street
 *        phone_number: +9876543210
 *        type: Technology
 *        website: http://www.abc-corp.com
 *
 *     RegisterResponse:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Status message
 *        data:
 *          type: object
 *          description: User data after successful registration
 *          $ref: '#/components/schemas/UserData'
 *
 *     UserData:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: User ID
 *        full_name:
 *          type: string
 *          description: Full name of the user
 *        email:
 *          type: string
 *          description: Email address of the user
 *        role:
 *          type: string
 *          description: User role (e.g., 'jobseeker' or 'company')
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: Timestamp of user creation
 *        jobSeeker:
 *          $ref: '#/components/schemas/JobSeekerData'
 *        company:
 *          $ref: '#/components/schemas/CompaniesData'
 *
 *    JobSeekerData:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: JobSeeker ID
 *        gender:
 *          type: string
 *          description: Gender of the job seeker
 *        phone_number:
 *          type: string
 *          description: Phone number of the job seeker
 *        address:
 *          type: string
 *          description: Address of the job seeker
 *        date_of_birth:
 *          type: string
 *          format: date
 *          description: Date of birth of the job seeker
 *        is_open:
 *          type: boolean
 *          description: Job seeker's availability status
 *
 *     CompaniesData:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: Company ID
 *        name:
 *          type: string
 *          description: Name of the company
 *        address:
 *          type: string
 *          description: Address of the company
 *        phone_number:
 *          type: string
 *          description: Phone number of the company
 *        type:
 *          type: string
 *          description: Type of the company
 *        website:
 *          type: string
 *          format: uri
 *          description: Website URL of the company
 *        is_open:
 *          type: boolean
 *          description: Company's availability status
 *
 *     Error400:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: Error status
 *        message:
 *          type: string
 *          description: Error message
 *        error:
 *          type: object
 *          properties:
 *            details:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Specific error message
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     companies:
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
 *     jobseeker:
 *       type: object
 *       properties:
 *         jobseekers_id:
 *           type: integer
 *           description: User ID
 *           example: 1
 *         email:
 *           type: string
 *           description: User email
 *           example: jobseeker0@gmail.com
 *         role:
 *           type: string
 *           description: User role
 *           example: jobseeker
 *         photo_profile:
 *           type: string
 *           description: Path to the user's photo profile
 *           example: public/uploads/default/man.png
 *         full_name:
 *           type: string
 *           description: User's full name
 *           example: John Doe
 *         bio:
 *           type: string
 *           description: Bio of the user as a job seeker
 *           example: Bio of me as Job Seeker
 *         gender:
 *           type: string
 *           description: User's gender
 *           example: M
 *         phone_number:
 *           type: string
 *           description: User's phone number
 *           example: +6281312345565
 *         address:
 *           type: string
 *           description: User's address
 *           example: Jln. Abal-abal, Jakarta, Wakanda
 *         place_of_birth:
 *           type: string
 *           nullable: true
 *           description: User's place of birth
 *           example: null
 *         date_of_birth:
 *           type: string
 *           format: date-time
 *           description: User's date of birth
 *           example: 2000-07-11T16:00:00.000Z
 *         cv_path:
 *           type: string
 *           nullable: true
 *           description: Path to the user's CV
 *           example: null
 *         portfolio_path:
 *           type: string
 *           nullable: true
 *           description: Path to the user's portfolio
 *           example: null
 *         on_work:
 *           type: boolean
 *           description: Indicates if the user is currently on work
 *           example: false
 */
