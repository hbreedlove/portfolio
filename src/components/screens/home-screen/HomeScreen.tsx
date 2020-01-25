import React, { memo } from 'react';
import './styles.scss';

export default memo(() => {
  return (
    <div className="home-screen">
      <div className="home-screen__welcome">
        <h1 className="welcome-heading">Hi, I'm Hayden...</h1>
        <div className="welcome-text">
          <p>It's nice to meet you.</p>
          <p>
            I'm a front end engineer. This website is currently being updated. Until then if you'd
            like to know more, you can message me <a href="mailto:hbreedlove1@gmail.com">here</a>.
          </p>
        </div>
      </div>
    </div>
  );
});
