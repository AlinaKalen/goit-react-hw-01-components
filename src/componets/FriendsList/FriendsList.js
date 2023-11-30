
import React from 'react';
import css from './FriendsList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.namefr}>{name}</p>
    </li>
  );
};
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};
export default FriendList;