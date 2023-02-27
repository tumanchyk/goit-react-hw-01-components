import StatisticTitle from "./Statistic-title"
import StatisticList from "./Statistic-list"
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function Statistics({title, data}){
return (
<section className={css.statistics}>
    {title && <StatisticTitle title= {title}/>}
    <StatisticList items= {data}/>
</section>
)
}
Statistics.propTypes = {
title: PropTypes.string,
data: PropTypes.array,
}