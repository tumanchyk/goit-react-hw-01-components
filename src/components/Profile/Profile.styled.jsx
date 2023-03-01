import styled from "@emotion/styled";
const UserProfile = styled.div `
margin-top: 50px;
  width: 200px;
  background-color: #22262b;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`
const Avatar = styled.img`
width: 80px;
  border-radius: 50px;`

  const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  padding-bottom: 20px;
  `
  const UserName = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin: 20px 0 10px 0;
  `
  const Tag = styled.p`
  color: #959698;
  `
  const City = styled.p`
  margin-top: 10px;
  `
  const Statistic = styled.ul`
  border-top: 1px solid #595c60;
  width: 100%;
  display: flex;
  font-size: 14px;
  padding-top: 15px;
  justify-content: space-between;
  `
  const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  `
  const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  `
  const   Quantity = styled.span`
  margin-top: 10px;
  `
  export {UserProfile, Avatar, Description, UserName, Tag, City, Statistic, StatisticItem, Label, Quantity}