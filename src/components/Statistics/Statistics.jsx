import StatisticTitle from "./Statistic-title"
import StatisticList from "./Statistic-list"
import PropTypes from 'prop-types';
import { StatSection } from "./Statistics.styled";

export default function Statistics({title, data}){
return (
<StatSection>
    {title && <StatisticTitle title= {title}/>}
    <StatisticList items= {data}/>
</StatSection>
)
}
Statistics.propTypes = {
title: PropTypes.string,
data: PropTypes.array,
}