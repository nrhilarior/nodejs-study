# Projeto

Este projeto consiste em um banco de dados para criar, buscar, alterar e deletar usuários de um sistema.

## Pré-Requisitos

- Node
- TypeScript
- Express
- Rest API
- Postgress

## Banco de dados

### Tabelas

| Tabela    |                    Descrição                    |
|-----------|-------------------------------------------------|
| usuarios  | Armazena os usuários e fazem algumas alterações |

### SQL tabela usuário

```sql
create table users (
	id serial primary key,
	name varchar, 
	last_name varchar,
	birthdate varchar
);
```

## Endpoints

### Cadastrar Usuário

- **Endpoint:** `/uers`
- **Método:** `POST`
- **Descrição:** Cria um novo usuário no sistema.

#### Parâmetros

Nenhum parâmetro de URL.

#### Corpo da Requisição

```json
{
    "id": 5,
    "name": "Ruan",
    "lastName": "Rodrigues",
    "birthdate": "19/09/2005"
}
```
#### Retornos

Código: 201 Created
Retorno:
```json
{
    "id": 5,
    "name": "Ruan",
    "lastName": "Rodrigues",
    "birthdate": "19/09/2005"
}
```

Código: 500 Internal Server Error

### Listar Usuário

- **Endpoint:** `/uers?limit=3&page=1`
- **Método:** `GET`
- **Descrição:** Lista os usuários do sistema.

#### Parâmetros

- limit = Limite de usuário por página
    - Query parameter
- page = Número de páginas
    - Query parameter

#### Retornos

Código: 200 Sucesso
Retorno:
```json
[
    {
        "id": 5,
        "name": "Ruan",
        "lastName": "Rodrigues",
        "birthdate": "19/09/2005"
    }
]
```

Código: 500 Internal Server Error

### Buscar um Usuário

- **Endpoint:** `/uers/{id}`
- **Método:** `GET`
- **Descrição:** Buscar um usuário do sistema.

#### Parâmetros

- id = Código do usuário
    - Path parameter

#### Retornos

Código: 200 Sucesso
Retorno:
```json
{
    "id": 5,
    "name": "Ruan",
    "lastName": "Rodrigues",
    "birthdate": "19/09/2005"
}
```

Código: 404 Not Found

Código: 500 Internal Server Error

### Atualizar um Usuário

- **Endpoint:** `/uers/{id}`
- **Método:** `PUT`
- **Descrição:** Atualiza algum dado do usuário do sistema.

#### Parâmetros

- id = Código do usuário
    - path parameter

#### Retornos


```json
{
    "mensagem": "Usuário deletado com sucesso",
    "usuario": {
        "id": 3,
        "name": "Mike",
        "last_name": "Anholeto",
        "birthdate": "06/02"
    }
}
```

Código: 404 User Not Found

Código: 500 Internal Server Error

### Deletar um Usuário

- **Endpoint:** `/uers/{id}`
- **Método:** `DELETE`
- **Descrição:** Deletar um usuário do sistema.

#### Parâmetros

- id = Código do usuário
    - path parameter

#### Retornos

Código: 204 
```json
{
    "mensagem": "Usuário deletado com sucesso",
    "usuario": {
        "id": 3,
        "name": "Mike",
        "last_name": "Anholeto",
        "birthdate": "06/02"
    }
}
```

Código: 404 User Not Found

Código: 500 Internal Server Error
