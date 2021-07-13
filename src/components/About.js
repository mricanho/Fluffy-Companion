import React from 'react';

const About = () => (
  <section className="hero is-large is-info">
    <div className="hero-body">
      <div className="container">
        <div className="card">
          <div className="card-content">
            <p className="title has-text-black has-text-centered is-size-3">
              In Fluffy Companion you can take a look and pick your next Pet
            </p>
            <p className="title has-text-black has-text-centered is-size-4">
              We love animals and we want to share our knowledge with you!
            </p>
            <p className="title has-text-black has-text-centered is-size-5 mb-6">
              Take a look at our homepage and navigate throug the pagination :)
            </p>
            <p className="subtitle has-text-black has-text-centered is-size-6">
              Fluffy Companion&lsquo;s team
            </p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                View on
                {' '}
                <a href="https://github.com/mricanho/Fluffy-Companion">Github</a>
              </span>
            </p>
            <p className="card-footer-item">
              <span>
                Check the
                {' '}
                <a href="https://www.linkedin.com/in/mricanho/">Linkedin</a>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </section>
);

export default About;
