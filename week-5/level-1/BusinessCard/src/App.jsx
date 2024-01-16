import React from 'react';
import { BusinessCard } from './BusinessCard';

function App() {
  const userData = {
    name: 'Abhishek Singh',
    description: 'Software Developer',
    interests: ['React', 'JavaScript', 'Web Development'],
    linkedin: 'https://www.linkedin.com/in/abhi5h3k-5ingh',
    twitter: 'https://twitter.com/abhi5h3k_5ingh',
    otherSocialMedia: {
      label: 'GitHub',
      url: 'https://github.com/abhi5h3k-5ingh',
    },
  };

  return (
    <div>
      <h1>User Business Card</h1>
      <BusinessCard
        name={userData.name}
        description={userData.description}
        interests={userData.interests}
        linkedin={userData.linkedin}
        twitter={userData.twitter}
        otherSocialMedia={userData.otherSocialMedia}
      />
    </div>
  );
}

export default App;
