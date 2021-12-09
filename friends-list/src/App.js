import React from 'react';
import './App.css';

const App = () => <PersonList/>;

const PersonList = () => {
  const people = [
    {
      img:22, name:'John',job:'Developer'
    },
    {
      img:34, name:'Mike',job:'UX Designer'
    },
    {
      img:66, name:'Kevin',job:'Quality Engineer'
    }
  ];
  return (
  <section>
    <Person person={people[0]} />;
    <Person person={people[1]} />;
    <Person person={people[2]} />
  </section>
  );
};

const Person = (props) => {
  const {img,name,job} = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
  <div className="person">
  <img src={url} alt=""/>
  <div>
    <h4>{name}</h4>
    <h4>{job}</h4>
  </div>
  </div>
  );
};

export default App;
