import { BsFillCircleFill } from 'react-icons/bs';
import {
  FriendOneCard,
  FriendName,
  SpanGreen,
  SpanRed,
} from 'components/FriendList/FriendCard.styled';
export const FriendCard = ({ item }) => {
  return (
    <FriendOneCard>
      {item.isOnline ? (
        <SpanGreen>
          <BsFillCircleFill />
        </SpanGreen>
      ) : (
        <SpanRed>
          <BsFillCircleFill />
        </SpanRed>
      )}

      <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
      <FriendName className="name">{item.name}</FriendName>
    </FriendOneCard>
  );
};
