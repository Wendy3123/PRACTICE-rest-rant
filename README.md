# Project REST-Rant

TBD-SUMMARY
(REST-Rant is an app where users can review restaurants.)


## Tech Usage
CSS Framework: Bootstrap

Stack: MongoDB, Express, NodeJS

Server-Side Rendering: JSX

Node Modules: method-override, dotenv, express-react-views


## Routes

| method     | path                     | purpose                                           |
| :--------- | :----------------------  | :-----------------------------------------------  |
| GET        | /                        | Home Page                                         |
| GET        | /places                  | places index page                                 |
| POST       | /places                  | creates new place                                 |
| GET        | /places/new              | Form page for creating a new place                |
| GET        | /places/:id              | Details about a particular place                  |
| PUT        | /places/:id              | Update a particular place                         |
| GET        | /places/:id/edit         | Form page for editing an existing place           |
| DELETE     | /places/:id              | Delete a particular place                         |
| POST       | /places/:id/rant         | Create a rant (comment) about a particular place  |
| DELETE     | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place  |
| GET        |             *            | 404 page (matches any route not defined above)    |


## Database
Places
| Field          | Type     |
| :------------- |:---------|
| _id            |Object ID |
| name           |String    |
| city           |String    |
| state          |String    |
| pic            |String    |


Rants
| Field          | Type                |
| :------------- |:--------------------|
| _id            |Object_Id            |
| place_id       |ref(places) Object_Id|
| rant           |Boolean              |
| rating         |Number               |
| comment        |String               |
| reviewer       |String               |



## Planning

### User Stories
TBD(imagine u r a user using this website... as a user i want to see....when i click on the /places page it should show...)

### Wireframes
TBD(upload an img from wireframe ex)

## Notes

Possible bonus ideas:
<ul>
    <li>update for comments</li>
    <li>aggregate rating for a place</li>
    <li>Auto-complete state dropdown</li>
</ul>