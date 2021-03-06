Yondu Exam BE
=============

The app can do simple crud functions.

Coding Style
------------

1. `CommonJS`

Packages used
-------------

1. [express](https://www.npmjs.com/package/express)
2. [cors](https://www.npmjs.com/package/cors)
3. [sequelize](https://www.npmjs.com/package/sequelize)
4. [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
5. [mysql2](https://www.npmjs.com/package/mysql2)
6. [nodemon](https://www.npmjs.com/package/nodemon)
7. [morgan](https://www.npmjs.com/package/morgan)
8. [cross-env](https://www.npmjs.com/package/cross-env)
9. [jest](https://www.npmjs.com/package/jest)
10. [supertest](https://www.npmjs.com/package/supertest)

Database (MySQL)
----------------

Run Apache XAMPP Server, MySQL first. If for some reason you cannot connect the app to database, check the `config.json` under config folder. Try to change the `username` and `password` credentials with your credentials.

Installation
------------

```
npm install
```
from this directory. It will re-install the `node_modules` folder based on the dependencies on `package.json` file.

Test
-----

```
npm test
```
from this directory.
It will run the `test` script.

How to use?
----------

```
npm start
```
from this directory.
It will run the `start` script.

API reference
-------------
1. GET All Users: [http://localhost:8080/api/users](http://localhost:8080/api/users)
2. GET User by Id: [http://localhost:8080/api/users/1](http://localhost:8080/api/users/1)
3. POST Create User: [http://localhost:8080/api/users](http://localhost:8080/api/users)
4. PATCH Update User by Id: [http://localhost:8080/api/users/1](http://localhost:8080/api/users/1)
5. DELETE Remove User by Id: [http://localhost:8080/api/users/1](http://localhost:8080/api/users/1)
6. DELETE All Users: [http://localhost:8080/api/users/](http://localhost:8080/api/users/)
