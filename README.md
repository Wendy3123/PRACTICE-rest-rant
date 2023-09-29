# Project REST-Rant

REST-RANT is an app to view photos and user review content of your favorite restaurants. This app allows users to edit or delete their review. In addition, you may add new restaurants that aern't on the app yet!

## Tech Usage

CSS Framework: Bootstrap

Stack: MongoDB, Express, NodeJS

Server-Side Rendering: JSX

Node Modules: method-override, dotenv, express-react-views

## Routes

| method | path                     | purpose                                          |
| :----- | :----------------------- | :----------------------------------------------- |
| GET    | /                        | Home Page                                        |
| GET    | /places                  | places index page                                |
| POST   | /places                  | creates new place                                |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing place          |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | \*                       | 404 page (matches any route not defined above)   |

## Database

Places
| Field | Type |
| :------------- |:---------|
| \_id |Object ID |
| name |String |
| city |String |
| state |String |
| pic |String |

Rants
| Field | Type |
| :------------- |:--------------------|
| \_id |Object_Id |
| place_id |ref(places) Object_Id|
| rant |Boolean |
| rating |Number |
| comment |String |
| reviewer |String |

## Always welcome to new ideas

Let me know ...

<ul>
    <li>How I can improve on this app 😆</li>
    <li>Any bugs you run into 👾</li>
    <li>What your experience was as a user ⭐️</li>
</ul>
