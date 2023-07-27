import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> WELCOME TO REACTJS WORLD</h1>
      <fieldset className="a">
        <legend>Login Seafood System</legend>
        <table style={{ width: 100, margin: "0 auto" }}>
          <tr>
            <th>Username</th>
            <td>
              <input type="text" name="txtUsername" id="txtUsername" />
            </td>
          </tr>
          <tr>
            <th>Password</th>
            <td>
              <input type="password" name="txtPassword" id="txtPassword"/>  
            </td>
          </tr>
          <tr>
            <td></td>
            <td style={{ float: "right" }}>
              <button id="btnLogin">Login</button>
            </td>
          </tr>
        </table>
      </fieldset>
    </div>
  );
}

export default App;
