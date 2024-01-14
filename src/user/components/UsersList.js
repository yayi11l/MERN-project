import React from "react";

import './UsersList.css'
import UsersItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = props => {
  if (props.items.length === 0) {
    return (<div className="center">
      <Card>
        <h2> No users found</h2>
      </Card>
    </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map(user => {
        return (<UsersItem 
          key={user.id} 
          id={user.id} 
          name={user.name} 
          image={user.image} 
          placeCount={user.places} 
        /> )
        // blue part: things will be output
      })}
    </ul>)
};

export default UsersList