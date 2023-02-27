import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
import TransactionTableBody from './TransactionTableBody';

export default function TransactionHistory ({transactionList}){
  return (
    <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
    <TransactionTableBody list= {transactionList}/>
  </table>)
}
 TransactionHistory.propTypes = {
  transactionList: PropTypes.array,
 }