import React from 'react';
import Profile from './componets/Profile/Profile';
import Statistics from './componets/Statistics/Statistics';
import FriendList from './componets/FriendsList/FriendsList';
import TransactionHistory from './componets/Transaction/TransactionHistory';
import user from './doc/user.json';
import data from './doc/data.json';
import friends from './doc/friends.json';
import transactions from './doc/transactions.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;