// import PropTypes from 'prop-types';
import { StaticticsList } from "./StaticticsList/StaticticsList";
import { Card, Title } from "./Statictics.styled";


export const Statistics = ({ data , title }) => { 

    return <div>
        <Card>
        {/* {title && <h2 className={css.title}>{title}</h2>} */}
          {title && <Title>{title}</Title>}
        <StaticticsList data={data}/>
        </Card>
    </div>;   

}




