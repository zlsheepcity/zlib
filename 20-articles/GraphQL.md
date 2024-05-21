# GraphQL
v 2024.4.25

- https://graphql.org/
- query language
- the power to ask for exactly what is needed
- GraphQL is typically served over HTTP via a single endpoint which expresses the full set of capabilities of the service. This is in contrast to REST APIs which expose a suite of URLs each of which expose a single resource.


## Difference between REST, GraphQL, and gRPC

RESTful APIs use HTTP methods (such as GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources identified by a URL (Uniform Resource Locator). A viable option if you are struggling to maintain your REST APIs.

GraphQL is a query language that allows clients to specify exactly what data they need from a server. Can be a good choice for scenarios where fine-grained control over data and real-time updates are important.

gRPC is a high-performance, open-source protocol that is often used in microservice architectures. Can be a good choice for scenarios where performance, efficiency, and real-time updates are important.


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


