import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Section = () => {
  return (
    <section className="py-20 mt-20 h-[500px] bg-[#0f1112]">
       
      <div className="container mx-auto px-4 text-center">
      <h1 className="text-6xl  tracking-tighter py-4 sm:text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-5006" style={{ fontFamily: "Limelight, sansserif",fontSize:"65px"}}>
          DJS 
        </h1>
        <h1 className="text-5xl  tracking-tighter py-4 sm:text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-5006" style={{ fontFamily: "Limelight, sansserif",fontSize:"70px"}}>
           CODESTARS
        </h1>
        <p className="text-xl md:text-2xl text-white dark:text-black-300 mb-8">
          <Typewriter
            words={['Empowering Coders', 'Join Our Community', 'Where Algorithim meets Excellence','Where Competition Meets Code','Where Logic Meets Optimization']}
            loop={0}
            cursor
            cursorStyle='✮'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <div className="space-x-4">
          <button className="bg-orange-500 text-white hover:bg-orange-600 transition-colors text-lg py-2 px-6">
            Explore
          </button>
           
        </div>
      </div>
    </section>
  );
};

export default Section;
