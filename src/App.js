import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import { render } from '@testing-library/react';

const customers=[
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자1',
  'job':'대학생2'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'홍길동1',
  'birthday':'961222',
  'gender':'남자1',
  'job':'대학생2'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'이순신',
  'birthday':'961222',
  'gender':'여자',
  'job':'대학생2'
}
]

class App extends Component{
  constructor()
    {
        super();
        console.log("나오냐?");
    }
    
  render(){
  return (
    <div>
      {
        customers.map (c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender = {c.gender}
              job ={c.job}
            />
          );
        })
      }
    </div>
  );
}
}

export default App;
