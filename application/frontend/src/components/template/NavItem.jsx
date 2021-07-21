import { Link } from 'react-router-dom'

export default props => 
 
<Link id={props.id} to={props.navigateTo}>
    <i className={`fa fa-${props.faClass} w-80`}></i> {props.name}
</Link>
           


