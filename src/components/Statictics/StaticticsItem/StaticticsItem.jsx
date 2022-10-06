import PropTypes from 'prop-types';
import { Item, Percentage } from "./StaticticsItem.styled";

export const StaticticsItem = ({data}) => { 
    return <Item>
        < span> {data.label}</span>
        <Percentage>{data.percentage}%</Percentage>
    </Item>
        ;
}

StaticticsItem.propTypes = {
    data: PropTypes.object

}