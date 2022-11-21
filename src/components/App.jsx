import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from './Profile/user.json';
import statData from './Statistics/stat.json';
import friendsData from './FriendsList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        avatar={userData.avatar}
        userName={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <Statistics title={'Upload stats'} stats={statData} />
      <Friends friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
};
