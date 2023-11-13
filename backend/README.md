# VCommerce Backend
[Full Documentation](https://documenter.getpostman.com/view/20963177/2s9YRDyAMj)

This backend server to the VCommerce application provides two APIs to the frontend to interact with in a RESTful manner. There is the `user` API and the `product` API.

This server connects to a MYSQL db for users and a Mongo db for products.

## Table of Contents

- [API Documentation](#features)
- [Things to Work On](#things-to-do)

# API Documentation

# 📁 Collection: User 


## End-point: All users
List all the registered users to the application. (Admin only route)
### Method: GET
>```
>http://localhost:5000/api/v1/users
>```
### Response: 200
```json
{
    "status": "success",
    "data": [
        {
            "first_name": "dummy",
            "last_name": "user",
            "roll": "20bce0193",
            "email": "dummy.user@vitstudent.ac.in",
            "phone": "9943574856",
            "address": "l block room 405"
        },
        {
            "first_name": "arnab2",
            "last_name": "banik",
            "roll": "20bds0034",
            "email": "arnab.banik2023@vitstudent.ac.in",
            "phone": "8697134868",
            "address": "n block room 405"
        },
        {
            "first_name": "arnab",
            "last_name": "banik",
            "roll": "20bds0038",
            "email": "arnab.banik2020@vitstudent.ac.in",
            "phone": "8697134869",
            "address": "n block room 405"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Me
View current user's profile.
### Method: GET
>```
>http://localhost:5000/api/v1/users/me
>```
### Response: 200
```json
{
    "status": "success",
    "data": {
        "first_name": "dummy",
        "last_name": "user",
        "roll": "20bce0193",
        "email": "dummy.user@vitstudent.ac.in",
        "phone": "9943574856",
        "address": "l block room 405"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get User
View any user profile.
### Method: GET
>```
>http://localhost:5000/api/v1/users/20bds0038
>```
### Response: 200
```json
{
    "status": "success",
    "data": {
        "first_name": "arnab",
        "last_name": "banik",
        "roll": "20bds0038",
        "email": "arnab.banik2020@vitstudent.ac.in",
        "phone": "8697134869",
        "address": "n block room 405"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get My Favourites
List out current user's favourite products.
### Method: GET
>```
>http://localhost:5000/api/v1/users/favourites
>```
### Response: 200
```json
{
    "status": "success",
    "data": {
        "first_name": "arnab",
        "last_name": "banik",
        "roll": "20bds0038",
        "email": "arnab.banik2020@vitstudent.ac.in",
        "phone": "8697134869",
        "address": "n block room 405"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Register User
Register a new user into the application.
### Method: POST
>```
>http://localhost:5000/api/v1/users/register
>```
### Body (**raw**)

```json
{
    "first_name": "Dummy",
    "last_name": "User",
    "roll": "20bds0034",
    "email": "dummy.user@vitstudent.ac.in",
    "phone": "9943574856",
    "address": "l block room 405",
    "password": "password1234"
}
```

### Response: 200
```json
{
    "status": "success",
    "data": {
        "first_name": "dummy",
        "last_name": "user",
        "roll": "20bce0193",
        "email": "dummy.user@vitstudent.ac.in",
        "phone": "9943574856",
        "address": "l block room 405"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login User
Login to the application.
### Method: POST
>```
>http://localhost:5000/api/v1/users/login
>```
### Body (**raw**)

```json
{
    "id": "20bds0034",
    "password": "password1234"
}
```

### Response: 200
```json
{
    "status": "success",
    "user": {
        "first_name": "dummy",
        "last_name": "user",
        "roll": "20bce0193",
        "email": "dummy.user@vitstudent.ac.in",
        "phone": "9943574856",
        "address": "l block room 405"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Me
Update current user's address or phone number.
### Method: PATCH
>```
>http://localhost:5000/api/v1/users/updateMe
>```
### Body (**raw**)

```json
{
    "address": "N 405"
}
```

### Response: 200
```json
{
    "status": "success",
    "data": {
        "first_name": "dummy",
        "last_name": "user",
        "roll": "20bce0193",
        "email": "dummy.user@vitstudent.ac.in",
        "phone": "9943574856",
        "address": "n 405"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Password
Update current user's password. This causes the user to get logged out automatically.
### Method: PATCH
>```
>http://localhost:5000/api/v1/users/updatePassword
>```
### Body (**raw**)

```json
{
    "password": "password1234",
    "newPassword": "pass1234"
}
```

### Response: 200
```json
{
    "status": "success",
    "data": {
        "first_name": "dummy",
        "last_name": "user",
        "roll": "20bce0193",
        "email": "dummy.user@vitstudent.ac.in",
        "phone": "9943574856",
        "address": "n 405"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete User Admin
Delete any user using their roll number. (Admin only route)
### Method: DELETE
>```
>http://localhost:5000/api/v1/users/20bds0034
>```
### Response: 200
```json
{
    "status": "success"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Me
Delete current user's profile. This also removes his listed items and favourites from the application.
### Method: DELETE
>```
>http://localhost:5000/api/v1/users/deleteMe
>```
### Response: 200
```json
{
    "status": "success"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Products 


## End-point: All Products
List out all products in the application.
### Method: GET
>```
>http://localhost:5000/api/v1/products
>```

### Response: 200
```json
{
    "status": "success",
    "data": {
        "products": [
            {
                "_id": "6537878ee9a7dbce5638f22d",
                "title": "Akash's Guitar",
                "photo": "user-20bds0038-1698137998836.jpeg",
                "desc": "a very nice acoustic guitar",
                "category": "misc",
                "condition": "almost new",
                "brand": "yemaha",
                "price": 500,
                "seller": "20bds0038",
                "createdAt": "2023-10-24T08:59:58.909Z"
            },
            {
                "_id": "653786cc8ea581d5a049b2ca",
                "title": "Ankan's Guitar",
                "photo": "user-20bds0038-1698137804912.jpeg",
                "desc": "an acoustic guitar with an average sound quality",
                "category": "misc",
                "condition": "fairly old",
                "brand": "yemaha",
                "price": 100,
                "seller": "20bds0038",
                "createdAt": "2023-10-24T08:56:44.983Z"
            }
        ]
    },
    "count": 2
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Product
Get a certain product's details.
### Method: GET
>```
>http://localhost:5000/api/v1/products/6537830b402223ff495003bc
>```
### Response: 200
```json
{
    "status": "success",
    "data": {
        "_id": "6537830b402223ff495003bc",
        "title": "Ankan's Guitar",
        "photo": "user-20bds0038-1698136842993.jpeg",
        "desc": "an acoustic guitar with an average sound quality",
        "category": "misc",
        "condition": "fairly old",
        "brand": "yemaha",
        "price": 100,
        "seller": "20bds0038",
        "createdAt": "2023-10-24T08:40:43.067Z",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Make favourite
Favourite a certain product specified by its ID.
### Method: GET
>```
>http://localhost:5000/api/v1/users/favourite/6537878ee9a7dbce5638f22d
>```
### Body (**raw**)

```json
{
    "title": "Ankan's Guitar",
    "category": "misc",
    "condition": "fairly old",
    "brand": "yemaha",
    "desc": "an acoustic guitar with an average sound quality",
    "price": 100
}
```

### Response: 200
```json
{
    "status": "success"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Remove favourite
Remove the item from the favourites list.
### Method: GET
>```
>http://localhost:5000/api/v1/users/unfavourite/6537830b402223ff495003bc
>```
### Body (**raw**)

```json
{
    "title": "Ankan's Guitar",
    "category": "misc",
    "condition": "fairly old",
    "brand": "yemaha",
    "desc": "an acoustic guitar with an average sound quality",
    "price": 100
}
```

### Response: 200
```json
{
    "status": "success"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Add Product
List a new product up for sale.
### Method: POST
>```
>http://localhost:5000/api/v1/products
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|title|Akash's Guitar|text|
|category|misc|text|
|condition|almost new|text|
|brand|yemaha|text|
|desc|a very nice acoustic guitar|text|
|price|500|text|
|photo|/home/arnab/Downloads/test_guitar_img.jpg|file|


### Response: 200
```json
{
    "status": "success",
    "data": {
        "title": "Ankan's Guitar",
        "photo": "user-20bds0038-1698136842993.jpeg",
        "desc": "an acoustic guitar with an average sound quality",
        "category": "misc",
        "condition": "fairly old",
        "brand": "yemaha",
        "price": 100,
        "seller": "20bds0038",
        "_id": "6537830b402223ff495003bc",
        "createdAt": "2023-10-24T08:40:43.067Z",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Product
Update one of the current user's listed products using its ID.
### Method: PATCH
>```
>http://localhost:5000/api/v1/products/6537830b402223ff495003bc
>```
### Body (**raw**)

```json
{
    "price": 300
}
```

### Response: 200
```json
{
    "status": "success",
    "data": {
        "_id": "6537830b402223ff495003bc",
        "title": "Ankan's Guitar",
        "photo": "user-20bds0038-1698136842993.jpeg",
        "desc": "an acoustic guitar with an average sound quality",
        "category": "misc",
        "condition": "fairly old",
        "brand": "yemaha",
        "price": 300,
        "seller": "20bds0038",
        "createdAt": "2023-10-24T08:40:43.067Z",
        "__v": 0
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Product
Delete a current user's listing by its ID.
### Method: DELETE
>```
>http://localhost:5000/api/v1/products/6537830b402223ff495003bc
>```
### Response: 204
```json
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Product Admin
Delete any product from the application using its ID. (Admin only route)
### Method: DELETE
>```
>http://localhost:5000/api/v1/products/adminDelete/6537830b402223ff495003bc
>```
### Response: 204
```json
null
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________

## Things to do
* Recommendations based on user's prev searches
