## Sick or Not

---

Clone repository

```
$ npm install
$ createdb sickornot
```

Add to knexfile.js
```js
// Update with your config settings.
require("dotenv").config(); // or load()
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/sickornot',
    connection_url: 'http://localhost:3000/'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL+'?ssl=true'
  }
};

```
Migrate and Seed Database
```
$ knex migrate:latest
$ knex seed:run

```

---

##### Local Routes
`http://localhost:3000/users/2/dates`


##### Heroku Routes

https://sickornot.herokuapp.com/users/1/dates
