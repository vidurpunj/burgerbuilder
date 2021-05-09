import React, {Component, useState} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BugerBuilder/BugerBuilder';
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

class App extends Component {
    state = {
        users: [
            {id: 1, name: 'John', age: 20},
            {id: 2, name: 'Peter', age: 20},
            {id: 3, name: 'Alex', age: 20},
            {id: 4, name: 'Scean', age: 20},
            {id: 5, name: 'Max', age: 20},
            {id: 6, name: 'Million', age: 20},
        ]
    }
     // [usersList, setUsersList] = useState([]);

     addUserHandler = (uname, uage) => {
        this.setState({users: [...this.state.users, {id: Math.random(), name: uname, age: uage}]})
    }

    render() {


        return (
            <div>
                <AddUser onAddUser={this.addUserHandler}/>
                <UserList users={this.state.users}/>
                <Layout>
                    <BurgerBuilder></BurgerBuilder>
                </Layout>
            </div>
        );
    }
}

export default App;
