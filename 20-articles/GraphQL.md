# GraphQL
v 2024.4.25

- https://graphql.org/
- query language
- the power to ask for exactly what is needed
- GraphQL is typically served over HTTP via a single endpoint which expresses the full set of capabilities of the service. This is in contrast to REST APIs which expose a suite of URLs each of which expose a single resource.


## Basic example snippets

#### defining types and fields
```
type Query {
  me: User
}
 
type User {
  id: ID
  name: String
}

# An object with a Globally Unique ID
interface Node {
  # The ID of the object.
  id: ID!
}
type User implements Node {
  id: ID!
  # Full name
  name: String!
}
```

#### functions
```
function Query_me(request) {
  return request.auth.user
}
 
function User_name(user) {
  return user.getName()
}
```

#### query
```
{

  # Queries can have comments!
  me {
    name
  }

  # Arguments
  human(id: "1000") {
    name
    height
  }

}
```

http://myapi/graphql?query={me{name}}  


