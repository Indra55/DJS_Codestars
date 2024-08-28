import React from 'react';
import './Section2.css';  

const Section2 = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-200 to-pink-200 backdrop-blur-md ">
      <div className="container  mx-auto px-4">
        <h2 className="text-3xl mt-10 font-bold tracking-tighter py-4 sm:text-4xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-12">
          Why Join DJS CODESTARS?
        </h2>
        <div className="grid gap-8  md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6 card-tilt">
            <div className="flex flex-col items-center mb-4">
              <img src={require('./assets/rocketlogo.png')} alt="Rocket" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-navy-900">Competitive Edge</h3>
            </div>
            <p className="text-gray-700 text-center">
              Sharpen your skills with our rigorous coding challenges and competitions.
              Whether you are a beginner looking to test your skills or an experienced coder wanting to push your limits,
              our platform offers the perfect environment to enhance your problem-solving abilities.
              Engage in weekly contests, hackathons, and peer challenges that mimic real-world coding scenarios, preparing you
              for both academic and professional success. 
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 card-tilt">
            <div className="flex flex-col items-center mb-4">
              <img src={require('./assets/community.png')} alt="Community" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-navy-900">Community</h3>
            </div>
            <p className="text-gray-700 text-center">
              Connect with like-minded coders and build a network of tech enthusiasts.
              Our community is the heart of DJS CODESTARS, where collaboration and mutual growth thrive. 
              Participate in discussion forums, group projects, and team coding sessions that allow you to learn from others,
              share your knowledge, and build long-lasting professional relationships. 
              This supportive environment is designed to foster creativity, innovation, and a passion for technology.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 card-tilt">
            <div className="flex flex-col items-center mb-4">
              <img src={require('./assets/skills.png')} alt="Skill Development" className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-navy-900">Skill Development</h3>
            </div>
            <p className="text-gray-700 text-center">
              Access curated resources and workshops to enhance your programming expertise.
              Our platform offers a comprehensive library of learning materials ranging from beginner tutorials to advanced courses in
              various programming languages and technologies. 
              Attend live workshops hosted by industry experts, participate in coding boot camps, and gain hands-on experience through practical projects.
              Whether you're looking to master the basics or dive into specialized fields, our resources are tailored to meet your learning goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
