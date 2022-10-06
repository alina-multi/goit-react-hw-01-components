import PropTypes from 'prop-types';
import {Description,ProfileImg, Avatar, Name, Tag, Location}  from "./UserDescription.styled"

export const UserDescription = ({ user: { username, tag, location, avatar } }) => {
   return <Description>
      
      <ProfileImg>
         <Avatar
            src={avatar}
            alt="User avatar"           
         /></ProfileImg>
     
     
      <Name>{username.toUpperCase()}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
     
      
   </Description>;

};

UserDescription.propTypes = {
   user: PropTypes.shape({ 
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string,

   })
   // username: PropTypes.number,
   // tag: PropTypes.array,
}

   
