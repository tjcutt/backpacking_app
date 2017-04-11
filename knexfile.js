'use strict';

module.exports = {
 development: {
   client: 'pg',
   connection: 'postgres://localhost/backpackingDB'
 },
 production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
 test: {
   client: 'pg',
   connection: 'postgres://localhost/backpackingDB_test',
    debug:false
 }
}
