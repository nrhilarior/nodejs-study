import express from 'express';
import { getUserById, getUsers } from './users/services/get.service';
import { updateUser } from './users/services/uptade.service';
import { deleteUser } from './users/services/delete.service';
import { createUser } from './users/services/create.service';

export const app = express();
app.use(express.json());

app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
