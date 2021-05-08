import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BugerBuilder/BugerBuilder';
import AddUser from "./components/Users/AddUser";

function App() {
    return (
        <div>
            <AddUser/>
            <Layout>
                <BurgerBuilder></BurgerBuilder>
            </Layout>
        </div>
    );
}

export default App;
