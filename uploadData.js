// Select the database to use.
use('ReactbackendProject');

// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany(
    [
        {
            id: 1,
            image: IMG1,
            title: 'Crypto Currency Dashboard & Financial Visualisation',
            github: 'https://github.com',
            demo: 'https://dribbble.com/Alien_pixels'
          },
          {
            id: 2,
            image: IMG2,
            title: 'Charts templates & infographics in Figma',
            github: 'https://github.com',
            demo: 'https://dribbble.com/Alien_pixels'
          },
          {
            id: 3,
            image: IMG3,
            title: 'Figma dashboard UI kit for data design web apps',
            github: 'https://github.com',
            demo: 'https://dribbble.com/Alien_pixels'
          },
          {
            id: 4,
            image: IMG4,
            title: 'Maintaining tasks and tracking progress',
            github: 'https://github.com',
            demo: 'https://dribbble.com/Alien_pixels'
          },
    ]
);

 //Insert a few documents into the PortfolioData collection.
 db.getCollection('testimonials').insertMany(
  [
       {
                avatar: AVTR1,
                name: 'Shizzy Marion',
                review: 'Therese developed a custom web application for my business, exceeding my expectations. She communicated clearly and professionally, delivering a high-quality product on time and within budget. I highly recommend Therese.'
            },
            {
                avatar: AVTR2,
                name: 'Marie Sandra',
                review:'Therese was an invaluable asset to our software development project, constantly pushing the boundaries of what was possible. She is a skilled programmer and excellent collaborator. I highly recommend her.'
            },
            {
                avatar: AVTR3,
                name: 'Stersy Fongu',
                review: 'Therese created a stunning and user-friendly UI/UX design that exceeded my expectations. She was communicative and professional throughout the project. shes good.'
            },
            {
                avatar: AVTR4,
                name:'Sharlynn Acha',
                review: 'Therese did an outstanding job on our UI/UX design project, improving the user experience of our product. She is a skilled designer and great collaborator. I highly recommend her ,shes the best.'
            }
    
      ]
 );
