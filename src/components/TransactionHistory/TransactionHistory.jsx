import PropTypes from 'prop-types';
import TransactionTableBody from './TransactionTableBody';
import { TransactionTable, TransactionTitle } from './Transaction.styled';
export default function TransactionHistory ({transactionList}){
  return (
    <TransactionTable>
        <thead>
          <tr>
            <TransactionTitle>Type</TransactionTitle>
            <TransactionTitle>Amount</TransactionTitle>
            <TransactionTitle>Currency</TransactionTitle>
          </tr>
        </thead>
    <TransactionTableBody list= {transactionList}/>
  </TransactionTable>)
}
 TransactionHistory.propTypes = {
  transactionList: PropTypes.array,
 }