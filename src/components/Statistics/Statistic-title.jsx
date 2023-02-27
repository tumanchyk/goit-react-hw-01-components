import PropTypes from 'prop-types';
import css from './Statistics.module.css'


export default function StatisticTitle({title}){
    return ( <h2 className={css.title}>{title}</h2>)
}
StatisticTitle.propTypes = {
    title: PropTypes.string.isRequired,
}