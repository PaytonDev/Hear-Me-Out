import { loginURL } from "../../spotify";

const LoginPage  = () => {
    return (
        <div>
            <h1>This Is The Login Page</h1>
            <a href={loginURL}>Login Here</a>
        </div>
    )
}

export default LoginPage