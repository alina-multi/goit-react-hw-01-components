import PropTypes from 'prop-types';
import { List, ListItem, Label, Quantity } from "./StatusInfo.styled";

export const StatusInfo = ({ stats: { followers, views, likes } }) => {
  return <List>
    <ListItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </ListItem>
  </List>;
};

StatusInfo.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
};