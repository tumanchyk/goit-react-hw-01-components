import PropTypes from 'prop-types';
import {UserProfile, Avatar, Description, UserName, Tag, City, Statistic, StatisticItem, Label, Quantity} from './Profile.styled'

export default function Profile({username,
    tag,
    location,
    avatar,
    stats}){
    return <UserProfile>
    <Description>
      <Avatar src={avatar}
        alt="User avatar"></Avatar>
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <City>{location}</City>
    </Description>
  
    <Statistic>
      <StatisticItem>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatisticItem>
      <StatisticItem>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatisticItem>
      <StatisticItem>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatisticItem>
    </Statistic>
  </UserProfile>

}
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}