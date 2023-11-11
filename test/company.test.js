const {
  removeCompany,
  createCompany,
  getCompany,
  createUser,
  removeUsers,
} = require('./company.utils')
const supertest = require('supertest')
const jwt = require('jsonwebtoken')
const app = require('../src/app.js')
require('dotenv').config()

const payload = {
  id: 1,
  email: 'test',
}
const key = process.env.JWT_SECRET
const aksesToken = jwt.sign(payload, key, { expiresIn: '2h' })

describe('GET /activity/:id', function () {
  beforeEach(async () => {
    await createUser()
    await createCompany()
  })

  afterEach(async () => {
    await removeCompany()
    await removeUsers()
  })
  it('should can get Company by id', async () => {
    const company = await getCompany()
    const result = await supertest(app)
      .get(`/company/` + company.id)
      .set('Authorization', `Bearer ${aksesToken}`)

    expect(result.status).toBe(200)
    expect(result.body.message).toBe('Success')
    expect(result.body.data).toBeDefined
  })
  it('should reject if id not found', async () => {
    const result = await supertest(app)
      .get(`/company/` + 99999)
      .set('Authorization', `Bearer ${aksesToken}`)

    expect(result.status).toBe(404)
    expect(result.body.message).toBe('Company not found')
    expect(result.body.data).toBeUndefined
  })

  it('should reject if id not be number', async () => {
    const result = await supertest(app)
      .get(`/company/` + 'asdf')
      .set('Authorization', `Bearer ${aksesToken}`)

    expect(result.status).toBe(400)
    expect(result.body.message).toBe('Id must be a number')
    expect(result.body.data).toBeUndefined
  })
  it('should reject if not have token ', async () => {
    const company = await getCompany()
    const result = await supertest(app).get(`/company/` + company.id)

    expect(result.status).toBe(400)
    expect(result.body.message).toBe('Silahkan login terlebih dahulu')
  })

  it('should reject if token expired or not verify', async () => {
    const company = await getCompany()
    const result = await supertest(app)
      .get(`/company/` + company.id)
      .set('Authorization', `Bearer ${aksesToken}+asdwq`)

    expect(result.status).toBe(401)
    expect(result.body.message).toBe(
      'Token akses tidak valid atau kedaluwarsa.',
    )
  })
})
