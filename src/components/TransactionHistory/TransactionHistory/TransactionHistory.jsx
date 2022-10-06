import PropTypes from 'prop-types';
import { TransactionTableHead } from "../TransactionTableHead/TransactionTableHead";
import { TransactionItem } from "../TransactionItem/TransactionItem";
import { Table,TableBody } from "./TransactionHistory.styled"

export const TransactionHistory = ({ transactions }) => {
    return <Table>
        <thead>
        <TransactionTableHead/>
        </thead>

        <TableBody>   
            {transactions.map(transaction =>
                <TransactionItem key={transaction.id} transaction={transaction} />)}
        </TableBody>
    </Table>;
};
  

TransactionHistory.propTypes = {
    data: PropTypes.array
}


 



