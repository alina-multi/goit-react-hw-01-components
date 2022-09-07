export const FriendListItem = ({ friend: {avatar,name, isOnline, id }}) => { 
  
    return <li className="item" >
        <span className="status">{isOnline ? "Тут" : "Не тут"}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>;
   
}