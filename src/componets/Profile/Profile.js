import React from 'react';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar || 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {Object.entries(stats).map(([label, quantity]) => (
          <li key={label}>
            <span className={css.label}>{label}</span>
            <span className={css.quantity}>{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;