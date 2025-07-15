import { Request, Response } from 'express';
import { pool } from './connection';

// PUT com path parametros, body e passando pelo Banco de Dados
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, lastName, birthdate } = req.body || {};
  try {
    const result = await pool.query(
      'UPDATE users SET name = $2, last_name = $3, birthdate = $4 WHERE id = $1 RETURNING *',
      [id, name, lastName, birthdate]
    );
    if (result.rows.length === 0) {
      res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
};
