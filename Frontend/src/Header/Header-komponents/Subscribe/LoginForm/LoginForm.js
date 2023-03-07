import { useState } from 'react';
import './LoginForm.css';
import Card from '../Card/Card'
import { database } from '../database';


const LoginForm = ({setIsLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages]= useState({});

    const errors = {    
        username: 'Invalid username',
        password: 'Invalid password',
        noUsername: 'Please enter your username',
        noPassword: 'Please enter your password'
    };

    const handelSubmit = (e) =>{
        //Prevent page for reloading
        e.preventDefault();

        if (!username) {
            //Username imput is empty
            setErrorMessages({name: 'noUsername', message: errors.noUsername});
            return;
        }

        if (!password) {
            //Password imput is empty
            setErrorMessages({name: 'noPassword', message: errors.noPassword});
            return;
        }

        //Search for user credentials
        const currentUser = database.find((user) => user.username === username);

        if (currentUser) {
            if(currentUser.password !== password){
                //Wrong password
                setErrorMessages({name: 'password', message: errors.password})
            } else {
                //Correct password, log in user
                setErrorMessages({});
                // console.log('logged in!');
                setIsLoggedIn(true);

            }

        } else {
            //Username doesn't exist in the database
            setErrorMessages({name: 'username', message: errors.username})
        }
    };

    //Render error messages
    const renderErrorMsg = (name) =>
        name === errorMessages.name && (
            <p className='error-msg'>{errorMessages.message}</p>
        )

    return <Card>
        <h1 className='title'>Sing In</h1>
        <p className='subtitle'>Please log in using your usrname and password</p>
        <form onSubmit={handelSubmit}>
            <div className='inputs-container'>
                <input 
                    type='text' 
                    placeholder='Username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                {renderErrorMsg('username')}
                {renderErrorMsg('noUsername')}
                <input 
                    type='password' 
                    placeholder='Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                {renderErrorMsg('password')}
                {renderErrorMsg('noPassword')}
            </div>
            <input type='submit' value='Log In' className='login-button'/>
        </form>

    </Card>;
};

export default LoginForm;