import { Request, Response } from 'express';
import { pool } from './connection';

// GET com páginação e passando pelo Banco de Dados
export const getUsers = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 3;
  const page = Number(req.query.page) || 1;
  const offset = (page - 1) * limit;

  console.log(`Buscando o usuário com o limite: ${limit}, página: ${page}, offset: ${offset}`)

  try {
    const result = await pool.query(
      'SELECT * FROM users ORDER BY id LIMIT $1 OFFSET $2',
      [limit, offset]
    );
    res.json(result.rows);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
};

// GET com path parametro e passando pelo Banco de Dados
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  console.log(`Buscando usuário com o código informado: ${id}`);

  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      console.log(`Buscando usuário com o código informado: ${id}`);

      res.status(404).json({ erro: 'Usuário não encontrado' });
    } else {
      console.log(`Buscando usuário com o código informado: ${id}`);

      res.json(result.rows[0]);
    }
  } catch (err: any) {
    console.log(`Buscando usuário com o código informado: ${id}`);

    res.status(500).json({ erro: err.message });
  }
};
