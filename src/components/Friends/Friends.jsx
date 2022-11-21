import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { FriendsList } from '../FriendsList/FriendsList';

export const Friends = ({ friends }) => {
  return (
    <Box
      as="ul"
      mx="auto"
      mt="60px"
      p="0"
      width="320px"
      bg="gainsboro"
      display="flex"
      flexDirection="column"
      alignItems="flexStart"
      listStyle="none"
    >
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsList key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </Box>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
