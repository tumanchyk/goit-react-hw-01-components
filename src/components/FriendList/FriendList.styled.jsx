import styled from "@emotion/styled";
const List =styled.ul`
width: 250px;
  margin-bottom: 50px;
`
const Friend = styled.li`
     display: flex;
  border: 1px solid rgb(197, 195, 195);
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  &:not(:last-child) {
  margin-bottom: 5px;
}
`

const FriendName = styled.p`
font-weight: 500;
  font-size: 25px;
  margin-left: 10px;
`
const Status = styled.span`
 width: 10px;
  height: 10px;
  border-radius: 50px;
  margin-right: 10px;
  background-color: ${props=>(props.status ? 'green' : 'red')};
`
const Avatar = styled.img`
width: 40px;
  height: 40px;
`

export {List, Friend, FriendName, Status, Avatar}