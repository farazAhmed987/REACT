import React from 'react'
import Forms from './Forms'
import Team from './Team'
import Card from './Card'
import States from './States'
import LoginForm from './LoginForm'
import Services from './Services'
import ServiceForm from './ServiceForm'
const App = () => {
 const arr = [{
    head: 'form',
    name: 'Usman',
    email: 'u@gmail.com'
  },{
    head: 'form1',
    name: 'Usman khan',
    email: 'k@gmail.com'
  }]


  return (
    <div>
      
      
        <Team />
    <States />
    <LoginForm />
    <Services />
    <ServiceForm />
    </div>
  )

}

export default App
