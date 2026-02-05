# DeltaSigmaTask

Item Management REST API 

A simple Java backend application built using Spring Boot that provides RESTful APIs to manage a collection of items (similar to a basic e-commerce or catalog service).

**Features**
1) Add new items
2) Fetch an item by ID
3) In-memory data storage using ArrayList
4) Input validation using Jakarta Validation
5) RESTful API design

**Tech Stack**
1) Java 21
2) Spring Boot
3) Spring Web
4) Jakarta Validation
5) Maven

**Item Model**
Each item contains:
1) id (Long)
2) name (String, required)
3) description (String, required)
4) price (Double, required)

**API Endpoints**
1) Add a New Item
**Request**
POST: http://localhost:8080/bharani/items

Body-> raw-> JSON
{
  "name": "Nokia15",
  "description": "Nokia",
  "price": 7299
}

**Response**
{
    "id": 1,
    "name": "Nokia15",
    "description": "Nokia",
    "price": 7299.0
}

2) Get Item by ID
GET: http://localhost:8080/bharani/items/1

Response:
{
    "id": 1,
    "name": "iPhone 15",
    "description": "Apple Iphone",
    "price": 79999.0
}

**Input Validation**
1) name → must not be blank
2) description → must not be blank
3) price → must not be null
Invalid inputs return HTTP 400 Bad Request with validation error messages.

**How To Run**
Clone the Repo:

git clone https://github.com/Bharani2004/DeltaSigmaTask.git

cd DeltaSigmaTask

Run in terminal: mvn spring-boot:run

Access the API Endpoints in Postman or browser
