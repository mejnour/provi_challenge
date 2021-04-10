# Movie

This endpoint works everything movie-related in the proVlix API.

## Creation

`POST /movie/create` creates a proVlix movie entry.

This endpoint requires:
- movie title;
- movie genre;
- movie description.

It won't allow the creation of multiple movie entries with the same title.

**Request:**
``` json
{
    "title": "Bolas Redondas Não Têm Lados",
    "genre": "Fuleragem",
    "description": "Um filme sobre coisas redundantes."
}
```

**Response 1:** (status code 201)
``` json
{
    "msg": "Succesfully created"
}
```

**Response 2:** (status code 400)
``` json
{
    "error": "Movie exists already"
}
```

## Tweaking

`PUT /movie/edit` edits a proVlix movie entry.

This endpoint requires:
- movie title; AND
- movie genre; OR
- movie description.

It won't allow the tweaking of an inexistent movie title.

**Request:**
``` json
{
    "title": "Bolas Redondas Não Têm Lados",
    "genre": "Documentário",
    "description": "Um documentário controverso sobre geometria."
}
```

**Response 1:** (status code 204)
``` json
{
    "msg": "Succesfully altered"
}
```

**Response 2:** (status code 404)
``` json
{
    "error": "Title not found"
}
```

# Latest

`GET /movie/latest` returns the last 5 movie entries in the proVlix catalog.

This endpoint will return JSON object containing a list of JSON objects, where every object contains:
- id;
- title;
- genre;
- description.

**Response:** (status code 200)
``` json
{
    "latest": [
        {
            "id": "4729804b-5869-46b9-8e15-2e59eda6f87c",
            "title": "Bolas Redondas Não Têm Lados",
            "genre": "Fuleragem",
            "description": "Um filme sobre coisas redundantes."
        },
        {
            "id": "cdc3f599-6f10-4cc6-95d2-7cdcf02e62aa",
            "title": "A Meia-noite Buscarei a tua Alma",
            "genre": "Fuleragem",
            "description": "Um filme de Zé do Caixão."
        },
        {
            "id": "f4b8eca3-4087-4df0-a489-a7946fd3a27b",
            "title": "A Volta dos Que Não Foram 3",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "4c1bb0d2-4f3e-4823-9b67-1a5d44e1f2cc",
            "title": "A Volta dos Que Não Foram 2",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "f0272aa8-3970-4eac-8191-a7267b340f4c",
            "title": "A Volta dos Que Não Foram",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        }
    ]
}
```

# Full Catalog

`GET /movie/catalog` returns the full catalog of proVlix movie entries.

This endpoint will return JSON object containing a list of JSON objects, where every object contains:
- id;
- title;
- genre;
- description.

**Response:** (status code 200)
``` json
{
    "catalog": [
        {
            "id": "f0272aa8-3970-4eac-8191-a7267b340f4c",
            "title": "A Volta dos Que Não Foram",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "4c1bb0d2-4f3e-4823-9b67-1a5d44e1f2cc",
            "title": "A Volta dos Que Não Foram 2",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "f4b8eca3-4087-4df0-a489-a7946fd3a27b",
            "title": "A Volta dos Que Não Foram 3",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "cdc3f599-6f10-4cc6-95d2-7cdcf02e62aa",
            "title": "A Meia-noite Buscarei a tua Alma",
            "genre": "Fuleragem",
            "description": "Um filme de Zé do Caixão."
        },
        {
            "id": "4729804b-5869-46b9-8e15-2e59eda6f87c",
            "title": "Bolas Redondas Não Têm Lados",
            "genre": "Fuleragem",
            "description": "Um filme sobre coisas redundantes."
        },
        {
            "id": "949e24f1-5d5b-4de3-9a0f-92ce82d73f47",
            "title": "A Volta dos Que Não Foram 4",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "c3bf61fc-fdf8-4613-a554-38a45e9789a5",
            "title": "A Volta dos Que Não Foram 5",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "37ddec77-6f36-4a41-a922-85b193dfb04f",
            "title": "A Volta dos Que Não Foram 6",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        }
    ]
}
```

# Full Catalog by Title

`GET /movie/catalog/name` returns the full catalog of proVlix movie entries ordered by title.

This endpoint will return JSON object containing a list of JSON objects, where every object contains:
- id;
- title;
- genre;
- description.

**Response:** (status code 200)
``` json
{
    "catalog": [
        {
            "id": "cdc3f599-6f10-4cc6-95d2-7cdcf02e62aa",
            "title": "A Meia-noite Buscarei a tua Alma",
            "genre": "Fuleragem",
            "description": "Um filme de Zé do Caixão."
        },
        {
            "id": "f0272aa8-3970-4eac-8191-a7267b340f4c",
            "title": "A Volta dos Que Não Foram",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "4c1bb0d2-4f3e-4823-9b67-1a5d44e1f2cc",
            "title": "A Volta dos Que Não Foram 2",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "f4b8eca3-4087-4df0-a489-a7946fd3a27b",
            "title": "A Volta dos Que Não Foram 3",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "949e24f1-5d5b-4de3-9a0f-92ce82d73f47",
            "title": "A Volta dos Que Não Foram 4",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "c3bf61fc-fdf8-4613-a554-38a45e9789a5",
            "title": "A Volta dos Que Não Foram 5",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "37ddec77-6f36-4a41-a922-85b193dfb04f",
            "title": "A Volta dos Que Não Foram 6",
            "genre": "Fuleragem",
            "description": "Um filme controverso sobre pessoas indecisas."
        },
        {
            "id": "4729804b-5869-46b9-8e15-2e59eda6f87c",
            "title": "Bolas Redondas Não Têm Lados",
            "genre": "Fuleragem",
            "description": "Um filme sobre coisas redundantes."
        }
    ]
}
```