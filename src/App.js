import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link className="title-style" to="/">My Portfolio</Link>} scroll>
          <Navigation>
            <Link to="/aboutme">About me</Link> 
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link> 
            <Link to="/contact">Contact</Link>     
          </Navigation>
        </Header>
        <Drawer title={<Link style={{ textDecoration: 'none', color: "Black", padding: "0px" }} to="/">My Portfolio</Link>}>
          <Navigation>
            <hr style={{ padding: "0px", width: "80%", margin: "auto" }} />
            <Link to="/aboutme">About me</Link>
            <Link to="/resume" >Resume</Link>            
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
