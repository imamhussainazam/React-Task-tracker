import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Btn from './Button'

const Header = ({title, onAdd, toggleshow}) => {
  const location = useLocation()  

  return (
    <header className='header'><h1>
        {title}
        </h1>
        {location.pathname === '/' && <Btn color={toggleshow? 'red' : 'green'} text={toggleshow? 'Close ' : 'Add Task'} onClick={onAdd}/>
}
    </header>
  )
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
Header.defaultProps= {
    title: "Task Tracker",
}
// const headingstyle= {
//     color: 'white',
//     backgroundColor: 'teal'
// }

export default Header