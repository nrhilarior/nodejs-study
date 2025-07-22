import { Request, Response } from 'express';
import { pool } from '../../configs/database/connection';

// DELETE passando pelo Banco de Dados
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      res.status(404).json({ erro: 'Usuário não encontrado' });
    } else {
      res.status(204).json(result.rows[0]);
      res.json({ mensagem: 'Usuário deletado com sucesso', usuario: result.rows[0] });
    }
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
};
