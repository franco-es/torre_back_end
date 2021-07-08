# Torre Back-end

API make for call to endpoints of Torre company.

## API Reference

#### Get 10 Jobs

```http
  POST /api/jobs?size=10&aggregate=false&offset=0
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `api_key` | `string` | **Returns** array of jobs |

#### Get 10 People

```http
  POST /api/people?size=10&aggregate=false&offset=0
```

| Parameter | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `id`      | `string` | **Returns** array of people |

```http
  GET /api/getUser?user=${user}
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `id`      | `string` | **Returns** Genome of username |

## Authors

- [@franco-es](https://www.github.com/franco-es)


