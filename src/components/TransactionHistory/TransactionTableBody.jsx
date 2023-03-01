import PropTypes from 'prop-types';
import { DataField } from './Transaction.styled';
export default function TransactionTableBody({list}){
    return (
        <tbody>
            { list.map(({id, type, amount, currency})=>(
                 <tr key={id}>
                 <DataField>{type}</DataField>
                 <DataField>{amount}</DataField>
               <DataField>{currency}</DataField>
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
