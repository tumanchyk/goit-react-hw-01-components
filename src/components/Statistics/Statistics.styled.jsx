import styled from "@emotion/styled";

export const Title = styled.h2`
width: 100%;
  text-align: center;
  font-size: 30px;
  padding: 30px 0;
`
export const StatSection = styled.div`
width: 400px;
  margin: 50px 0;
  border: 1px solid rgb(188, 188, 188);
`
const StatList = styled.ul`
width: 100%;
  display: flex;
`
const StatItem = styled.li`
width: 100px;
height: 100px;
font-size: 18px;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${props => props.dataColor}
// &:nth-child(1n) {
//     background-color: #8edc8e;
//   }
//   &:nth-child(2n) {
//     background-color: #4549cc;
//   }
// &:nth-child(3n) {
//     background-color: #e34b4b;
//   }
//   &:nth-child(4n) {
//     background-color: #e9de80;
//   }
//   &:nth-child(5n) {
//     background-color: #7a3cff;
//   }
`
const Percentage = styled.span`
margin-top: 10px;
font-weight: 600;
font-size: 20px;
`
export {StatList, StatItem, Percentage}