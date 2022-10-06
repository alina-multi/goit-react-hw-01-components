import PropTypes from 'prop-types';
import { Item } from "./TransactionItem.styled"

export const TransactionItem = ({ transaction: { type, amount, currency} }) => {
    return <Item>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </Item>;
                   
};

TransactionItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
};