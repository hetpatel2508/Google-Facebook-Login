import '../App.css';
const Login = () => {
  const google = () => {
    window.open('http://localhost:6969/auth/google', '_self');
  };

  const github = () => {
    window.open('http://localhost:6969/auth/github', '_self');  
  };

  const facebook = () => {
    window.open('http://localhost:6969/auth/facebook', '_self');
  };

  const twitter = () => {
    window.open('http://localhost:6969/auth/twitter', '_self');
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img
              src="https://imgs.search.brave.com/WNmYnN33P-81WgMcwlDKQXxypuypMVEcihrqyg27o_s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjljYmNlZjEw/MTRjMGI1ZTQ4Yzgu/cG5n"
              alt=""
              className="icon"
            />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img
              src="https://imgs.search.brave.com/_ZXVeCXXBsGPbJeTBgVpe59RA75vprfGnhu7cP81NoM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5nbG9nby5jb20v/aW1hZ2VzL2FsbF9p/bWcvZmFjZWJvb2st/bG9nby5wbmc"
              alt=""
              className="icon"
            />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img
              src="https://imgs.search.brave.com/CTX3xHQ4cYJ31yds1Y4HfiDReTTZqA1yTHJgd42vE8Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/aWNvbi0xMDI0eDk5/NC00aDVzZG1rby5w/bmc"
              alt=""
              className="icon"
            />
            Github
          </div>
          <div className="loginButton github" onClick={twitter}>
            <img
              src="https://imgs.search.brave.com/CTX3xHQ4cYJ31yds1Y4HfiDReTTZqA1yTHJgd42vE8Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/aWNvbi0xMDI0eDk5/NC00aDVzZG1rby5w/bmc"
              alt=""
              className="icon"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;X
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
