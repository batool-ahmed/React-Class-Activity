import logo from './logo.svg';
import './App.css'
import {users} from './components/users'
import Display from './components/Display';

function App() {
  return (
    <div className="App">
          {users.map((user) => (
            <Display firstName = {user.firstName} lastName = {user.lastName} username = {user.username} classLevel = {user.classLevel} school = {user.school} email = {user.email} profilePicture = {user.profilePicture}/>
          ))}

    </div>
  );
}

export default App;
