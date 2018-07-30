module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/nyeresolution'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
