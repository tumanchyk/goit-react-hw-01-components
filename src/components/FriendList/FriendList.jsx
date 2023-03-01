import PropTypes from 'prop-types';
import {List, Friend, FriendName, Status, Avatar} from './FriendList.styled' 


export default function FriendList({list}){
 return (
<List>
    { list.map(({avatar, name, isOnline, id}) =>( 
        <Friend key={id}>
            <Status status={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar"></Avatar>
            <FriendName>{name}</FriendName>
        </Friend>
    ))
    }
</List>)
}


FriendList.propTypes = {
        friends: PropTypes.arrayOf(
            PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }))
    
}