import React from 'react'
import Header from './components/header'
import Section from './section'
import Section2 from './section2'
import Events from './events'
import Leaderboard from './leaderboard'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='bg-sectiong2'>
      <Header />
      <Section />
      <Section2 />
      <Events />
      <Leaderboard />
      <Footer />

    </div>
  )
}

export default App