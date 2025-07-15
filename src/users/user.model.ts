
// estrutura de base de dados
export interface User {
  id: number | undefined;
  name: string;
  lastName: string;
  birthdate: string;
}

// base de dados
// base de dados em memória
export const users: User[] = [];
