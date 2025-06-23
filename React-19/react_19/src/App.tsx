import { lazy, Suspense, useState, version } from 'react'
import './App.css'
import ConcurrentRenderingExample from './components/ConcurrentRenderingExample';
import ClientCounter from './components/ClientCounter';
import ServerUserList from './components/ServerUserList';
import List from './hooks/List';
import Timer from './components/Timer';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';


// const Profile = lazy(() => import('./components/Profile'))

const App = () => {

  return (
    <div>
      <Header />
      <ThemeSwitcher />
     {/* <h1>Welcome to Concurrent Rendering</h1> */}
     {/* <Suspense fallback={<div>Loading Profile...</div>}>
      <Profile />
     </Suspense> */}
     {/* <ConcurrentRenderingExample /> */}
     {/* <h1>React 19 - Server vs Client Components</h1> */}
     {/* {/* <ClientCounter /> */}
     {/* <ServerUserList />  */}
     {/* <List /> */}
     {/* <Timer />   useRef */}
    </div>
  )
}

export default App;
