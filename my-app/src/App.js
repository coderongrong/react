import './App.css';

import { Layout } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Publish from './pages/Publish'
import Dashboard from './pages/Dashboard'

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </Sider>
          <Content>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <Publish />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;


