import React from 'react';

export const LinkCard = ({ link }) => {
  console.log('What is link in here', link);
  return (
    <div>
      <a href={link.url}>{link.title}</a>
      <p>{link.description}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
