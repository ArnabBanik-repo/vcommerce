// MainComponent.jsx
import React, { useState } from 'react';
import Card from './Card';
import CardHead from './CardHead';

const MainComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const headings = ['Heading 1', 'Heading 2', 'Heading 3'];

  const cardsData = [
    [
      {
        picture: './one.jpg',
        title: 'Card 1.1 Title',
        description: 'Description for Card 1.',
      },
      {
        picture: './two.jpg',
        title: 'Card 1.2 Title',
        description: 'Description for Card 2.',
      },
      {
        picture: './three.jpg',
        title: 'Card 1.3 Title',
        description: 'Description for Card 3.',
      },
    ],
    [
      {
        picture: './two.jpg',
        title: 'Card 2.1 Title',
        description: 'Description for Card 1.',
      },
      {
        picture: './one.jpg',
        title: 'Card 2.2 Title',
        description: 'Description for Card 2.',
      },
      {
        picture: './three.jpg',
        title: 'Card 2.3 Title',
        description: 'Description for Card 3.',
      },
    ],
    [
      {
        picture: './two.jpg',
        title: 'Card 3.1 Title',
        description: 'Description for Card 1.',
      },
      {
        picture: './three.jpg',
        title: 'Card 3.2 Title',
        description: 'Description for Card 2.',
      },
      {
        picture: './one.jpg',
        title: 'Card 3.3 Title',
        description: 'Description for Card 3.',
      },
    ],
    
  ];

  return (
    <div className="flex justify-center">
      <div>
        <CardHead headings={headings} onClick={setActiveTab} />
        {cardsData[activeTab] && (
          <Card cardeach={cardsData[activeTab]} />
        )}
      </div>
    </div>
  );
};


export default MainComponent;
