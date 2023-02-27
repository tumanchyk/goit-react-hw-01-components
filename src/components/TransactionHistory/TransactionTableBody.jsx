import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export default function TransactionTableBody({list}){
    return (
        <tbody>
            { list.map(({id, type, amount, currency})=>(
                 <tr key={id}>
                 <td>{type}</td>
                 <td>{amount}</td>
               <td>{currency}</td>
               </tr>
            ))}
      </tbody>
    )
}
TransactionTableBody.propTypes = {
    list: PropTypes.arrayOf( PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }))
}