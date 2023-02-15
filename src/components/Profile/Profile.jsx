import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Picture,
  InfoDescription,
  Name,
  Stats,
  Info,
  Label,
  Quantity,
} from 'components/Profile/Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Container>
      <Description>
        <Picture src={avatar} alt={username} className="avatar" />
        <Name>{username}</Name>
        <InfoDescription>{tag}</InfoDescription>
        <InfoDescription>{location}</InfoDescription>
      </Description>

      <Stats>
        <Info>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Info>
        <Info>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Info>
        <Info>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Info>
      </Stats>
    </Container>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
