import React, {useState} from 'react';
import Classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log('New user created');
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge > 1) { //+ensure it is a number
            console.log(enteredUserName, enteredAge);
            setEnteredUserName('');
            setEnteredAge('');
            props.onAddUser(enteredUserName, enteredAge);
        }
    }

    const userNameChangedHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const userAgeChangedHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={Classes.input}>
            <div>
                <form method="post" onSubmit={addUserHandler}>
                    <div>
                        <label htmlFor="username">UserName:</label>
                        <input id="username"
                               type="text"
                               value={enteredUserName}
                               onChange={userNameChangedHandler}></input>
                        <label htmlFor="age">Age (years): </label>
                        <input id="age"
                               type="number"
                               value={enteredAge}
                               onChange={userAgeChangedHandler}></input>
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </div>
        </Card>
    );
}

export default AddUser;