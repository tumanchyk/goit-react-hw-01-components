import user from 'data/user.json'
import data from 'data/data.json'
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'
import  Profile  from 'components/Profile/Profile'
import  Statistics  from 'components/Statistics/Statistics'
import  FriendList  from 'components/FriendList/FriendList'
import  TransactionHistory from 'components/TransactionHistory/TransactionHistory'


export default function App (){
  return (
    
    <div className='components-container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: '100px',
      }}>
       React 

      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
      <Statistics title ="Upload stats" data= {data}/>
      <FriendList list = {friends} />
      <TransactionHistory transactionList={transactions}/>
    </div>
  )
};
