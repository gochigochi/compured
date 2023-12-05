// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from "../../db/config";

export default function handler(req, res) {
  if(req.method === 'GET'){
    pool.query(
      `SELECT * FROM imagenes`,
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result)
      }
    );
  }
  if(req.method === 'POST'){
    const { file, type, alt } = req.body
    pool.query(
      `INSERT INTO imagenes ((base64File, tipo, alt) VALUES (${file}, '${type}', '${alt}')`,
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
      `DELETE FROM imagenes WHERE id = ${id}`,
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.status(200).json(result)
      }
    );
  }
}
