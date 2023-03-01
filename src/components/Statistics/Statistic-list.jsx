import PropTypes from 'prop-types';
import {StatList, StatItem, Percentage} from './Statistics.styled'

export default function StatisticList({items}){
return ( 
<StatList>
{ items.map(({id, label, percentage }) =>(
    <StatItem key={id} dataColor={getRandomHexColor}>
      <span>{label}</span>
      <Percentage>{percentage}%</Percentage>
    </StatItem>
  ))
}
</StatList> )
}

StatisticList.propTypes={
    items: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),),
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
