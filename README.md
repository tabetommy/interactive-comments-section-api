# Movie REST API

This api serve data on movies

## Get user by username

### Request

`GET /users/:user`

### Response

    JSON object of all movies consising of key value pairs eg.
    {
    	"id":"123",
    	"username":"John Doe",
    	"comment":"Write a nice comment here"
    }



## Create comment

### Request

`Post /users/:user`

### Request body

    {
        comment: "write a nice comment here"
    }


## Update comment

### Request

`PUT /users/:user`

### Resquest body

  {
        comment: "write a nice comment update here"
    }


## Delete comment

### Request

`DELETE/users/:user`



👤 **Author1**

- Website : [portfolio](https://tabetommy.github.io/website-portfolio/)
- Github: [tabetommy](https://github.com/tabetommy)
- Linkedin: [tabetommy](https://www.linkedin.com/in/tommy-egbe-304464116/)
