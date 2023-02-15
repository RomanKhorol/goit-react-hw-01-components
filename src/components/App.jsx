import personalData from 'user.json';
import statistics from 'data.json';
import friendData from 'friends.json';
import TransactionData from 'transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { Main } from 'components/Profile/Profile.styled';
import { FriendList } from 'components/FriendList/FriendList';
import { Transaction } from 'components/Transaction/Transaction';
export const App = () => {
  return (
    <Main>
      <Profile
        username={personalData.username}
        tag={personalData.tag}
        location={personalData.location}
        avatar={personalData.avatar}
        followers={personalData.stats.followers}
        views={personalData.stats.views}
        likes={personalData.stats.likes}
      />
      <Statistic stats={statistics} />
      <FriendList friends={friendData} />
      <Transaction datas={TransactionData} />
    </Main>
  );
};
