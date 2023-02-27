import PropTypes from 'prop-types';
import css from './FriendList.module.css'
export default function FriendList({list}){
 return (
<ul className ={css.friendList}>
    { list.map(({avatar, name, isOnline, id}) =>( 
        <li className={css.item} key={id}>
            <span className={isOnline?css.statusOnline:css.statusOffline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    ))
    }
</ul>)
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