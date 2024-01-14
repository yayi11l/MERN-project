import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS =[
    {id: 'u1', name:'max', image:"https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/channel-1.jpeg", places: 3}
  ]
  return <UsersList items={USERS} />;
}
 
export default Users;