import React from 'react';
import './events.css';
import card1 from './assets/starwars.png'; 
import card2 from './assets/brotherhood.png';
import card3 from './assets/narutoscroll.png';

const Events = () => {
  return (
    <div>
      <section className='h-auto bg-[#0f1112] py-10'>
        <h1 className='text-3xl font-bold tracking-tight py-4 sm:text-4xl md:text-5xl text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500'>
          Upcoming Events
        </h1> 
        <div id='cards' className='flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16'>
          
          <div className='card-tilt relative border-yellow-50 p-6 shadow-lg w-full sm:w-[300px] md:w-[350px] bg-cover bg-center rounded-lg overflow-hidden' style={{ backgroundImage: `url(${card1})` }}>
            <div className='absolute inset-0 backdrop-blur-md bg-black/30'></div>
            <div className='relative z-10 p-4'>
              <h2 className='text-xl sm:text-2xl font-semibold mb-4 text-[#b84f53]'>Galactic Code Clash</h2>
              <button className='p-2 bg-headerorange text-white rounded-xl mb-4 w-full'>3rd September</button>
              <p className='text-sm sm:text-base text-white'>
                Gear up for an epic coding duel with a twist! In this themed competition, solve problems inspired by Star Wars, and may the best coder harness the Force to claim victory!
              </p>
            </div>
          </div>

          <div className='card-tilt relative text-black border-yellow-50 p-6 shadow-lg w-full sm:w-[300px] md:w-[350px] bg-cover bg-center rounded-lg overflow-hidden' style={{ backgroundImage: `url(${card2})` }}>
            <div className='absolute inset-0 backdrop-blur-md bg-black/30'></div>
            <div className='relative z-10 p-4'>
              <h2 className='text-[23px] sm:text-[23px] font-semibold mb-4 text-[#ff2415]'>Algorithmic Speed Dating</h2>
              <button className='p-2 bg-headerorange text-white rounded-xl mb-4 w-full'>17th September</button>
              <p className='text-sm sm:text-base'>
                Jump into our Algorithm Speed Dating event! Tackle quick, timed coding challenges while rotating through different problems and partners. Test your skills, adapt to various scenarios, and enjoy a dynamic coding experience!
              </p>
            </div>
          </div>

          <div className='card-tilt relative text-[#faf9a9] text-shadow-lg border-yellow-50 p-6 shadow-lg w-full sm:w-[300px] md:w-[350px] bg-cover bg-center rounded-lg overflow-hidden' style={{ backgroundImage: `url(${card3})` }}>
            <div className='absolute inset-0 backdrop-blur-md bg-black/30'></div>
            <div className='relative z-10 p-4'>
              <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Jutsu for Algorithms</h2>
              <button className='p-2 bg-headerorange text-white rounded-xl mb-4 w-full'>17th September</button>
              <p className='text-sm sm:text-base text-white'>
                Learn about algorithmic problem-solving techniques inspired by Naruto's jutsus. Discover how to use creative and strategic approaches to tackle complex coding challenges like a true shinobi.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Events;
