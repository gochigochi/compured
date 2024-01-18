import mysql from "serverless-mysql"

export const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "secret",
    database: "pruebacompured",
  },
})