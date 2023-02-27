import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
import TransactionTableBody from './TransactionTableBody';

export default function TransactionHistory ({transactionList}){
  return (
    <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th className={css.transactionTitle}>Type</th>
            <th className={css.transactionTitle}>Amount</th>
            <th className={css.transactionTitle}>Currency</th>
          </tr>
        </thead>
    <TransactionTableBody list= {transactionList}/>
  </table>)
}
 TransactionHistory.propTypes = {
  transactionList: PropTypes.array,
 }