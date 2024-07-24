import FacebookLogin from 'react-facebook-login';

const LoginForm = () => {
    const handleFacebookCallback = (response: { status: string; }) => {
        if (response?.status === "unknown") {
            console.error('Sorry!', 'Something went wrong with facebook Login.');
            return;
        }
        console.log(response);
        // console will print following object for you
    };
    return (
        <div className="abcd" style={{ margin: 200, padding: 200 }}>
            <FacebookLogin
                buttonStyle={{ padding: "6px" }}
                appId="278645435311727"  // we need to get this from facebook developer console by setting the app.
                autoLoad={false}
                fields="name,email,picture"
                callback={handleFacebookCallback} />
        </div>
    );
};
export default LoginForm;
// Declaration file for LoginForm module
