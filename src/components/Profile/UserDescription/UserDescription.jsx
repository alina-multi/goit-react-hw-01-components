import PropTypes from 'prop-types';
import css from  "./UserDescription.module.css"

export const UserDescription = ({ user: { username, tag, location, avatar } }) => {
   return <div className={css.description}>
      <img
         src={avatar}
         alt="User avatar"
         className="avatar"
         width="200px"
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
   </div>;

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

