import logo from './logo.svg';
import './App.css';
import User from './UserComp';
import Avatar from './AvatarComp';
import Hobbies from './HobbiesComp';
import React from 'react';


const hobbiesObj = [{name:"Swimming", descr:"4x50 relay", isActive:false}, {name:"Gamming", descr:"Fighting games", isActive:true}, {name:"Drawing", descr:"Pinups and Anime", isActive:true}];

const countHobbies = (lHobbies) => {
  let sum = 0;
  for(let i = 0; i<lHobbies.length;i++){
    if(lHobbies[i].isActive === true) sum++;
  };
  return sum;
};
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <User name="Hugo" description="Student" age="23" avatar = { <Avatar />}/>
          <Hobbies hobbies={hobbiesObj} showHobbies="1" count={countHobbies(hobbiesObj)}/>
        </header>
      </div>
    );
  };
};

export default App;
