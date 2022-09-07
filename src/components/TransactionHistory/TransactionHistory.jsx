import { TransactionTableHead } from "./TransactionTableHead";
import { TransactionItem} from "./TransactionItem"

export const TransactionHistory = ({ transactions }) => {
    return <table className="transaction-history">
        <thead>
        <TransactionTableHead/>
        </thead>

        <tbody>   
            {transactions.map(transaction =>
                <TransactionItem key={transaction.id} transaction={transaction} />)}
        </tbody>
    </table>;
};
  





