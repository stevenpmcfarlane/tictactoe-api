# Tic Tac Toe API

## Endpoints

```
POST /lobbies
GET /lobbies/:id
POST /lobbies/:id/players

POST /games
GET /games/:id
POST /games/:id/players

GET /games/:id/state
PATCH /games/:id/state
```

### POST /lobbies

Create a lobby

**Response**

```json
{
  "id": "uuid"
}
```

### POST /lobbies/:id/players

Join lobby

**Request**

```json
{
  "playerName": "string"
}
```

**Response**

```json
{
  "playerId": "uuid"
}
```

### GET /lobbies/:id

**Response**

```json
{
  "id": "uuid",
  "name": "string",
  "currentGameId": "uuid",
  "players": {
    <playerId>: {
      "id": "uuid",
      "name": "string",
      "score": "integer"
    }, {...}
  },
  "gamesPlayed": ["uuid"]
}
```

### POST /games

Starts a new game

**Request**

```json
{
  "playerId": "uuid"
}
```

**Response**

```json
{
  "id": "uuid"
}
```

### GET /games/:id

**Response**

```json
{
  "id": "uuid",
  "playerX": "uuid",
  "playerO": "uuid",
  "startDate": "datetime"
}
```

### POST /games/:id/players

**Request**

```json
{
  "playerId": "uuid"
}
```

### GET /games/:id/state

**Response**

```json
{
  "id": "uuid",
  "controller": "uuid", // playerId of person whose turn it is
  "concluded": "boolean",
  "winner": "uuid",
  "board": [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
}
```

### PATCH /games/:id/state

Update player moves
