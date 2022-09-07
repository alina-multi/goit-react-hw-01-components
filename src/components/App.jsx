


import userData from "./user";
import { Profile } from "./Profile/Profile";

import data from "./stats";
import { Statistics } from "./Statictics/Statistics";

import friends from "./friends";
import { FriendList } from './FriendList/FriendList/FriendList'

import transactions from "./transactions";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"
 



export const App = () => {
  return (
    <div>
      <h1>HOMEWORK</h1>

      <h2>TASK 1</h2>
      < Profile user={userData} />

      <h2>TASK 2</h2>
      < Statistics title="Upload stats" data={data} />

      <h2>TASK 3</h2>
      < FriendList friends={friends} />

      <h2>TASK 4</h2>
      < TransactionHistory transactions={transactions} />

      

    
    </div>
  );
};



