import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendAvatar,
  FriendsStatus,
  FriendsName,
} from './FriendsList.styled';

export const FriendsList = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendItem>
        <FriendsStatus isOnline={isOnline}>{isOnline}</FriendsStatus>
        <FriendAvatar src={avatar} />
        <FriendsName>{name}</FriendsName>
      </FriendItem>
    </>
  );
};

FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
