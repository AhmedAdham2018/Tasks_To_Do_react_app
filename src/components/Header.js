import PropTypes from 'prop-types'
import { FaPen } from 'react-icons/fa'
import Button from "./Button"

const Header = ({title , onShowAddTask , showAdd}) => {

    return ( <header className="header">
        <h1>{title} <FaPen /></h1>
        <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "#FF0000" : "#00CC00"} onClick={onShowAddTask} />
    </header> );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

 
export default Header;