const request = require('supertest')
const app = require('../server.js')
describe('User API', () => {
    it('should show all users', async () => {
        const res = await request(app).get('/api/users')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('users')
    }),
    it('should show a user', async () => {
        const res = await request(app).get('/api/users/3')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('user')
    }),
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                fname: 'fname4',
                lname: 'lname4',
                address: 'address4',
                postcode: 'postcode4',
                contact: 'contact4',
                email: 'email4',
                username: 'username4',
                password: 'password4'
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('user')
    }),
    it('should update a user', async () => {
        const res = await request(app)
            .patch('/api/users/1')
            .send({
                fname: 'fname11',
                lname: 'lname11',
                address: 'address11',
                postcode: 'postcode11',
                contact: 'contact11',
                email: 'email11',
                username: 'username11',
                password: 'password11'
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('user')
    }),
    it('should delete a user', async () => {
        const res = await request(app).del('/api/users/3')
        expect(res.statusCode).toEqual(204)
    }),
    it('should delete all users', async () => {
        const res = await request(app).del('/api/users/')
        expect(res.statusCode).toEqual(204)
    })
})
