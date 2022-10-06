import PropTypes from 'prop-types';
import { List } from "./StaticticsList.styled";
import { StaticticsItem } from "../StaticticsItem/StaticticsItem"


export const StaticticsList = ({ data }) => { 
    return <List>
                {data.map(data => 
                <StaticticsItem key={data.id} data={data}/> )
} 
    </List>
}

StaticticsItem.propTypes = {
    data: PropTypes.object

}