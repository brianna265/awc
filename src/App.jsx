// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Officers from './Components/Officers/Officers'
import Heading from './Components/Heading/Heading'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Events from './Components/Events/Events'
import Hero4 from './Components/Hero4/Hero4'
import Meetings from './Components/EventPages/Meetings'
import FlagshipEvents from './Components/EventPages/FlagshipEvents'
import Opportunities from './Components/EventPages/Opportunities'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          {/* main page */}
          <Route path='/' element={
            <>
            <Hero4/>
            <About/>
            {/* <Heading subtitle='Get Involved' title='What We Do'/> */}
            <Events/>
            {/* <Heading subtitle='2025-2026 Officer Team' title='Meet the Team!'/> */}
            {/* <Officers/> */}
            {/* <Heading subtitle='Get Involved' title='Join Us!'/> */}
            
            </>
          }/>

          {/* dropdown routes */}
          <Route path='/about' element={<About/>}/>
          <Route path='/about/officers' element={<Officers/>} />
          <Route path='/activities' element={<Events/>} />
          <Route path='/activities/meetings' element={<Meetings/>} />
          <Route path='/activities/flagship-events' element={<FlagshipEvents/>} />
          <Route path='/activities/opportunities' element={<Opportunities/>} />

          {/* fallback route */}
          <Route path='*' element={<Hero4/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
  
  //   <div>
  //     <Navbar/>
  //     {/* <Hero2/> */}
  //     <Hero4/>
  //     <div className='container'>
  //       <About/>
  //       <Heading subtitle='Get Involved' title='What We Do'/>
  //       <Events/>
  //       {/* <Opportunities/> */}
  //       <Heading subtitle='2025-2026 Officer Team' title='Meet the Team!'/>
  //       <Officers/>
  //       {/* <Heading subtitle='Get Involved' title='Join Us!'/> */}
  //       <Footer/>
  //     </div>
      
  //   </div>
  // )
}

export default App