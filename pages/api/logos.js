import { pool } from "../../db/config";

export default function handler(req, res) {
  if(req.method === 'GET'){
    pool.query(
      `SELECT * FROM logos`,
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result)
      }
    );
  }
  if(req.method === 'POST'){
    const { file, alt } = req.body
    pool.query(
      `INSERT INTO imagenes ((base64Logo,  alt) VALUES (${file}, '${alt}')`,
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result)
      }
    );
  }

  if(req.method === 'DELETE'){
    const { id } = req.body
    pool.query(
      `DELETE FROM logos WHERE id = ${id}`,
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result)
      }
    );
  }
}