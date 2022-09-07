// import PropTypes from 'prop-types';
import { UserDescription } from "./UserDescription/UserDescription"
import { StatusInfo } from './StatusInfo/StatusInfo'
import css from  "./Profile.module.css"

export const Profile = ({user}) => { 
    return <div className={css.profile}>
    < UserDescription user={user} />
    < StatusInfo stats={user.stats} />
</div>
}

