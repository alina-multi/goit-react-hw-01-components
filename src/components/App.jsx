
import {Container, Header, Section} from "./App.styled"

import userData from "./user";
import { Profile } from "./Profile/Profile";

import data from "./stats";
import { Statistics } from "./Statictics/Statistics";

import friends from "./friends";
import { FriendList } from './FriendList/FriendList/FriendList';


import transactions from "./transactions";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory/TransactionHistory";
 


export const App = () => {
  return (
  <Container>
      
      <Section>
        <Header>PROFILE</Header>
        < Profile user={userData} />
      </Section>

      <Section>
        <Header>STATISTICS</Header>
         < Statistics title="Upload stats" data={data} />
      </Section>

      
<Section>
    <Header>FRIEND LIST</Header>
      < FriendList friends={friends} />
      </Section>
      
      <Section>
    <Header>Transaction History</Header>
   < TransactionHistory transactions={transactions} />
      </Section>
  </Container>
      
  );
};



