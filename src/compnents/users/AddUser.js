import React from "react";
import classes from './AddUser.module.css';
import Card from "../ui/Card";
import Button from "../ui/Button";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
