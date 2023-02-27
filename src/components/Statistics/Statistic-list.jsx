import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function StatisticList({items}){
return ( 
<ul className = {css.statistic}>
{ items.map(({id, label, percentage }) =>(
    <li className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  ))
}
</ul> )
}

StatisticList.propTypes={
    items: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),),

}
