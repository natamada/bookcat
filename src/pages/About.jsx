import React from 'react';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookCat</h2>
            <p className='fs-17'>A simple book catalog app.</p>
            <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About