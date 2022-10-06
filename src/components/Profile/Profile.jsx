import PropTypes from 'prop-types';
import { UserDescription } from "./UserDescription/UserDescription"
import { StatusInfo } from './StatusInfo/StatusInfo'
import { Card } from './Profile.styled'


export const Profile = ({user}) => { 
    return <div>
         <Card>
    < UserDescription user={user} />
            < StatusInfo stats={user.stats} />
            </Card>
</div>
    
   
}

Profile.propTypes = {
    friends: PropTypes.object
}

