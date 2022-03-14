# Social-Network-API-Ultimate

<span><img src="https://img.shields.io/badge/Created%20by-Tri%20Nguyen-088F8F?style=for-the-badge" height="20" /></span>

<span><img src="https://img.shields.io/badge/Node.js-MongoDB (Database)-339933?logo=node.js&logoColor=00F200" alt="Node.js logo - MongoDB" title="MongoDB" height="20" /></span>
<span><img src="https://img.shields.io/badge/Node.js-Express (Routing)-339933?logo=node.js&logoColor=00F200" alt="Node.js logo - Express" title="Express" height="20" /></span>
<span><img src="https://img.shields.io/badge/Node.js-Mongoose (ODM)-339933?logo=node.js&logoColor=00F200" alt="Node.js logo - Mongoose" title="Mongoose" height="20" /></span>
<span><img src="https://img.shields.io/badge/Node.js-Moment-339933?logo=node.js&logoColor=00F200" alt="Node.js logo - Moment" title="Moment" height="20" /></span>
<span><img src="https://img.shields.io/badge/npm package-npm%20install-339933?style=flat-square&logo=npm" alt="npm package" title="npm" height="20" /></span>

 ## Table of Contents:  
- [Description](#description)
- [Application](#application)
- [Installation](#installation)
- [API Test](#api-test)
- [Demo](#demo)
- [Criteria](#criteria)
- [References](#references)   
- [License](#license)  
- [Contact](#contact)  

### ***Description***
This is a social network API using a NoSQL database. In this set of API, the MongoDB database is used to handle large amounts of unstructured data. Express.js is used for routing. Mongoose is used as an Object Data Modeling (ODM) library for MongoDB and Node.js. The moment package is installed to format time stamps.  

### ***Application***
[Github repository](https://github.com/tringuyen1086/social-network-api-ultimate.git)

### ***Installation***

This application is not to be deployed. After downloading the repo, please see steps below to test the API routs.
> MongoDB installation is required (https://docs.mongodb.com/manual/installation/)
> Install the following packages
   - ```npm init -y```
   - ```npm i```
   - ```npm i express```
   - ```npm i mongoose```
   - ```npm i moment```
> ```npm start``` to start the server
> Test API routes using Insomnia Core

### ***API Test***  

Insomnia is used to test API routes 

---
User Routes

**`/api/users`**
* `GET` Get all users

**`/api/users/:id`**
* `GET` Get an user by ID
    ```json
    {
        "username": "Albert",
        "email": "albert@email.com"
    }
    ```
**`/api/users`**
* `POST` Add a new user
    ```json
    {
        "username": "Apple",
        "email": "apple@email.com"
    }
**`/api/users/:id`**
* `PUT` Update an user by ID

**`/api/users/:id`**
* `DELETE` Delete an user by ID
---
Thought Routes

**`/api/thoughts`**
* `POST` Post a new thought
    ```json
    {
        "thoughtText": "I love coding very much.",
        "username": "Tri",
        "userID: "622deb4c11e71b87e892e803"
    }

**`/api/thoughts`**
* `GET` Get all thoughts

**`/api/thoughts/:id`**
* `GET` Get a thought by ID

**`/api/thoughts/:id`**
* `PUT` Update a thought by ID
    ```json
    {
        "thoughtText": "Coding is all about passion."
    }

**`/api/thoughts/:id`**
* `DELETE` Delete a thought by ID
---
Friend Routes

**`/api/users/:userId/friends/:friendId`**
* `POST` Add a new friend to an user
* `DELETE` Delete a friend from an user.
---

Reaction Routes

**`/api/thoughts/:thoughtId/reactions`** 
* `POST` Post a new reaction

**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` Delete a reaction by ID
  

### ***Demo***
[User Routes]


https://user-images.githubusercontent.com/71200950/158111737-62f3de2b-b6d1-41f7-a1b1-daebcd4fbec0.mp4


[Thought Routes]



https://user-images.githubusercontent.com/71200950/158111981-e5a0196a-5a56-4051-9cb6-2aa73a3d81f4.mp4



[Friend Routes] 


https://user-images.githubusercontent.com/71200950/158111760-53197c16-6de9-4d5d-823c-ab9f65abd5cd.mp4


[Reaction Routes]


https://user-images.githubusercontent.com/71200950/158111768-6bbb41da-608a-427a-937b-262318015f0a.mp4


### ***Criteria***

#### User Story
> AS A social media startup           
> I WANT an API for my social network that uses a NoSQL database      
> SO THAT my website can handle large amounts of unstructured data    

#### Acceptance Criteria
> GIVEN a social network API    
> WHEN I enter the command to invoke the application    
> THEN my server is started and the Mongoose models are synced to the MongoDB database    
> WHEN I open API GET routes in Insomnia for users and thoughts    
> THEN the data for each of these routes is displayed in a formatted JSON    
> WHEN I test API POST, PUT, and DELETE routes in Insomnia    
> THEN I am able to successfully create, update, and delete users and thoughts in my database    
> WHEN I test API POST and DELETE routes in Insomnia    
> THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

### ***References***

UC Berkeley Extension Coding Bootcamp - Module 18: NoSQL Challenge: Social Network API 

## License: 
 [ICS](https://opensource.org/licenses/ISC)  
 

### ***Contact***
<div align="center">
  <a href="https://github.com/tringuyen1086" target="blank">
    <img width="90" height="90" src="https://img.icons8.com/stickers/100/000000/github.png" alt="tringuyendev-github-profile" />
  </a>
  <a href="https://www.linkedin.com/in/tri-nguyen-1086" target="blank">
    <img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="tringuyendev-linkedin" />
  </a>
  <a href="mailto:tri.nguyen1086@gmail.com" target="top">
    <img src="https://img.icons8.com/bubbles/100/000000/apple-mail.png" alt="tringuyen-email" />
  </a>
</div>

