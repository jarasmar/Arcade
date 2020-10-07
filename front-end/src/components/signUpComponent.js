import React from 'react';

export const SignUp = () => {
    return(
        <div>
            <h1>Sign UP!</h1>
            <form action="">
                <label for="username">Username:</label>
                <input type="text" name="username" placeholder="Username" />
                <label for="password">Password:</label>
                <input type="text" name="password" placeholder="Password" />
                <input type="submit" value="Submit" />
            </form> 
        </div>
    )
}