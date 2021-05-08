import React from 'react';
import Classes from './AddUser.module.css';
import Card from '../UI/Card';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log('New user created');
    }
    return (
        <Card className={Classes.input}>
            <div>
                <form method="post" onSubmit={addUserHandler}>
                    <div>
                        <label htmlFor="username">UserName:</label>
                        <input type="text"></input>
                        <label htmlFor="age">Age: </label>
                        <input type="text"></input>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        </Card>
    );
}

export default AddUser;