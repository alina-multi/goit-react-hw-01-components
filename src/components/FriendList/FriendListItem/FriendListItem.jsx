import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from "./FrinesListItem.styled";
import { TiTickOutline} from "react-icons/ti";

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  
    return <Item>
        {/* <Status>{isOnline ? "Тут" : "Не тут"}</Status> */}
        <Status status={isOnline}><TiTickOutline /></Status>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{name.toUpperCase()}</Name>
    </Item>;
   
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({ 
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number,

   })
}