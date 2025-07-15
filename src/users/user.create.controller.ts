import { Request, Response } from 'express';
import { User } from './user.model';
import { pool } from './connection';

// POST passando pelo Banco de Dados
export const createUser = async (req: Request, res: Response) => {
  const { name, lastName, birthdate } = req.body || {};

  if (!name) {
    res.status(400).json({ error: 'O campo name, não foi informado' });
  }
  if (!lastName) {
    res.status(400).json({ error: 'O campo lastName, não foi informado' });
  }
  if (!birthdate) {
    res.status(400).json({ error: 'O campo birthdate, não foi informado' });
  }

  const newUser: User = { id: undefined, name, lastName, birthdate };

   try {
    const result = await pool.query(
      'INSERT INTO users (name, last_name, birthdate) VALUES ($1, $2, $3) RETURNING *',
      [newUser.name, newUser.lastName, newUser.birthdate]
    );
    res.status(201).json(result.rows[0]);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  };
};
