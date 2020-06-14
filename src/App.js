import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
function App() {
  alert(
    'This app is still under development so some functions might not work and I apologize in advance for that, cheers!')
  return(
    <div>
      <Layout>
      <BurgerBuilder />
      </Layout>
      
    </div>
    
  )
}

export default App;