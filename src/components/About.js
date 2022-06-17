import { Link } from "react-router-dom"

const About = () => {
  return (<div>
    <h4>Version 1.0.0</h4>
    <h4>Developed by Imam</h4>
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to='/'>Go Back</Link>
    </footer>
    </div>)
}

export default About