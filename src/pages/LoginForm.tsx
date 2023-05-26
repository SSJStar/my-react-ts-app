import React, { FC } from 'react';
// @ts-ignore
import MyButton from "../component/MyButton";

interface LoginFormProps {
    doLogin: (name: string, password: string) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ doLogin }) => {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onButtonClick = () => {
        doLogin(name, password);
    };

    return (
        <div>
            <input type="text" value={name} onChange={onNameChange} />
            <input type="password" value={password} onChange={onPasswordChange} />
            <MyButton onClick={onButtonClick} title={"登 录"}></MyButton>
        </div>
    );
};