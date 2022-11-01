const db = require('../db')
const Kid = require('../models/kid')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const kids = [
    {
      name: 'Canyon Blaster',
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_canyon_blaster_1440x1533.jpg',
      description:
        'The little Road Runners in your group will give ol’ Wile E. Coyote a run for his money on this curvy, wavy, junior roller coaster that will be absolutely hair-raising for young children.Rustle up your little ones, step into a classic Acme mining car and get ready for a sweet and breezy ride that will remind you of scenes from classic Road Runner cartoons. This will be a short but spirited zing through woodsy trails, suitable for kids over 33” with a parent and over 36” riding on their own.  The steepest hill is only 8 feet, and the top speed is 10 miles per hour, but you will get some hustle on the twists, turns, and mini-drops, sure to give your junior daredevils breathtaking thrills.',
      height: '36"',
      capacity: '40 people',
      parkLocation: 'Bugs Bunny World',
      flashPass: 'available',
      year: '2005',
      history: 'ABC Rides',
      rating: 'mild'
    },

    {
      name: 'Daffys Adventure Tours',
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_daffys_adventure_tours_1440x1533.jpg',
      description:
        'All aboard the tour bus for a wacky ride made just for your smallest ducklings to enjoy.  But when your tour guide is that crazy duck, you know you’re in for the ride of your life. Even the littlest tykes will love a seat on Daffy’s magical tour bus, which leaves the ground and gently floats low in the air as it circles its scenic route of colorful trees surrounding snow covered mountains, and a view of Bugs Bunny World!  That crazy Daffy sometimes even drives the bus backwards.  But the wide bench seats and nice slow pace make this the comfiest, safest, easiest tour in town.',
      height: '36"',
      capacity: '20 people',
      parkLocation: 'Bugs Bunny World',
      height: '36in',
      flashPass: 'available',
      year: '2003',
      history: 'Hampton Rides',
      rating: 'mild'
    },

    {
      name: `Elmer's Weather Balloons`,
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/teaser_ElmerWeatherBalloons_STL.jpg',
      description:
        "'Silly wabbit, it's time to lift off in a hot air balloon with your host Elmer Fudd!  Climb into one of Elmer’s colorful striped balloon baskets and get ready to lift into the air. Now you're cruisin', as your personal hot air balloon circles, floating up and around.  You can simply look over the edge of your basket to enjoy a view of the Looney Tunes neighborhood on your mellow flight, or your little daredevils can grab hold of the center disk and give it a spin it to make the balloon spin wildly around.  Try it and you'll finally know what they mean by “dizzying heights.”  As Elmer would say, it's “vewy, vewy” fun!",
      height: '36"',
      capacity: '42 people',
      parkLocation: 'Bugs Bunny World',
      flashPass: 'available',
      year: '2007',
      history: 'Chance Rides',
      rating: 'mild'
    },

    {
      name: `Magic Flyer`,
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_magic_flyer_1440x1533.jpg',
      description:
        'Children can enjoy gentle hills and pint sized thrills on this junior-sized open-air roller coaster. Young thrill seekers will ride up a 10 foot tall hill and see the sights in the charming little train village of Whistlestop Park.',
      height: '36"',
      capacity: '15 people',
      parkLocation: 'Whistlestop Park',
      flashPass: 'available',
      year: '2010',
      history: 'Gravitron',
      rating: 'mild'
    },
    {
      name: 'Merrie Melodies Carousel',
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/teaser_MerrieMelodiesCarousel_LA.jpg',
      description:
        'Bugs Bunny World has its very own carousel, a mini country fairground replica even the smallest cowboys and cowgirls will love to ride.  Saddle up on the friendly horse of your choice - you can almost hear them neigh as they gently bob up and down in time to the music. Round and round you go, on a calmly-paced ride scaled down for little hands and feet.  Tykes get to have fun while they train for the day when they can take on the big rides, but this carousel is also very relaxing for their chaperones.',
      height: '36"',
      capacity: '50 people',
      parkLocation: 'Bugs Bunny World',
      flashPass: 'available',
      year: '2007',
      history: 'ABC Rides',
      rating: 'mild'
    },

    {
      name: 'Speedy Gonzales Hot Rod Racers',
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Speedy-Gonzales-Hot-Rod-Racers-Web-Banner.jpg',
      description:
        "Speedy Gonzales Hot Rod Racers are part of Bugs Bunny World and is our fourth roller coaster — more than any other U.S. theme park! Kids and parents will hop aboard the miniature hot rod race cars together and enjoy an action-packed ride. You'll experience plenty of drops and thrills as you sprint around the grand prix track. This mini-coaster is the perfect training ground for future thrill seekers. One day they’ll ride Tatsu, Goliath and Full Throttle but in the meantime, here’s a fun and friendly smaller-scale roller coaster for the little ones in your crew.",
      height: '36"',
      capacity: '12 people',
      parkLocation: 'Bugs Bunny World',
      flashPass: 'available',
      year: '2010',
      history: 'Fun Rides Tech',
      rating: 'mild'
    },

    {
      name: 'Test Ride',
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Speedy-Gonzales-Hot-Rod-Racers-Web-Banner.jpg',
      description:
        "Speedy Gonzales Hot Rod Racers are part of Bugs Bunny World and is our fourth roller coaster — more than any other U.S. theme park! Kids and parents will hop aboard the miniature hot rod race cars together and enjoy an action-packed ride. You'll experience plenty of drops and thrills as you sprint around the grand prix track. This mini-coaster is the perfect training ground for future thrill seekers. One day they’ll ride Tatsu, Goliath and Full Throttle but in the meantime, here’s a fun and friendly smaller-scale roller coaster for the little ones in your crew.",
      height: '36"',
      capacity: '12 people',
      parkLocation: 'Bugs Bunny World',
      flashPass: 'available',
      year: '2010',
      history: 'Fun Rides Tech',
      rating: 'mild'
    },

    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/Batman-Banner.jpg',
      name: 'TEST RIDE',
      description:
        'BATMAN The Ride will show you what it feels like to be BATMAN, on this deeply intense juggernaut that is definitely not for the timid. Show your strength and bravery as you take on GOTHAM’s criminal element. Once you’ve gotten your fill touring the shady, decaying backstreets of GOTHAM CITY, load up in the batcave for a dark and riveting adventure. You’re about to fight crime with your feet just dangling free in the air through 2,700ft./822.96m of track.',
      height: '54"',
      capacity: '40 people',
      parkLocation: 'DC Universe',
      rideFee: 'No Additional Fees',
      flashPass: 'No',
      year: '1994',
      history: 'Manufacturer: Bolliger & Mabillard',
      rating: 'Thrill Level: Maximum'
    }
  ]

  await Kid.insertMany(kids)
  console.log('Created some kids!')
}
const run = async () => {
  await main()
  db.close()
}

run()
