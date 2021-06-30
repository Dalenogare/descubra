import { Link } from 'react-router-dom'

export default props => 
 
<Link to={props.navigateTo}>
    <i className={`fa fa-${props.faClass}`}></i> {props.name}
</Link>
           


