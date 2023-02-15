import PropTypes from 'prop-types';
import { FriendCard } from 'components/FriendList/FriendCard';
import { FriendListCard } from 'components/FriendList/FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListCard>
      {friends.map(friend => {
        return <FriendCard item={friend} key={friend.id} />;
      })}
    </FriendListCard>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
