import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>Version 1.0.0</h2>
      <p>Developed by: Ahmed Adham.</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About;