import React from 'react';
import './App.css';
import ArticlesInfo from './components/Articles';
import ArticlesGraphqlInfo from './components/ArticlesGraphql';
import ArticlesGraphqlApolloInfo from './components/ArticlesGraphqlApollo';
import Menu from './components/Menu';
import ButtonWithAlert from './components/ButtonWithAlert';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div >
      <section className="section">
        <div className="container">
          <Menu />
          <p className="subtitle">
            My website with <strong>React</strong> and <strong>Bulma</strong>!
          </p>

          <div className="container">
            <div className="notification is-primary">
              This container is <strong>centered</strong> on desktop and larger viewports.
            </div>
          </div>
          <br />

          <div className=" is-inline-block-desktop">
            <div className="control">
              <input className="input is-primary" type="text" placeholder="Podaj wartość" />
            </div>
          </div>

          <nav className="menu">
            <p className="menu-label">
              Article list
            </p>
            <div id="app">
              <ArticlesInfo />
            </div>
          </nav>

          <br /><br /><br />
          <div id="buttonDiv">
            <ButtonWithAlert name="Add new" />
            <ButtonWithAlert name="Edit" />
          </div>

          <div id="graphqlArticlesDiv">
            <p className="menu-label">
              Article list graphql
            </p>
            <div>
              <ArticlesGraphqlInfo />
            </div>
          </div>

          <div id="graphqlApolloArticlesDiv">
            <br/><br/><br/>
            <p className="menu-label">
              Article list graphql apollo client
            </p>
            <div>
              <ArticlesGraphqlApolloInfo />
            </div>
          </div>
        </div>

      </section>
    </div>
  )
};

export default App;
