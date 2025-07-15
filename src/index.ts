import express from 'express';
import { getUserById, getUsers } from './users/user.get.controller';
import { createUser } from './users/user.create.controller';
import { updateUser } from './users/user.uptade.controller';
import { deleteUser } from './users/user.delete.controller';

const app = express();
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
