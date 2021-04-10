# Account

This endpoint works everything account-related in the proVlix API.
## Creation

`POST /account/create` creates a proVlix account.

This endpoint requires:
- account e-mail;
- account password.

It won't allow the creation of multiple account with the same e-mail.

**Request:**
``` json
{
    "email": "example@example.com",
    "password": "12345"
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
    "error": "Email exists already"
}
```

## Deletion

`DELETE /account/delete` deletes a proVlix account.

This endpoint requires:
- account e-mail;
- account password.

It won't allow the deletion of an inexistent e-mail.

**Request:**
``` json
{
    "email": "example@example.com",
    "password": "12345"
}
```

**Response 1:** (status code 204)
``` json
{
    "msg": "Succesfully deleted"
}
```

**Response 2:** (status code 404)
``` json
{
    "error": "Email and/or Password not matching or nonexistent"
}
```