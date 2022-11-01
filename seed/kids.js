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
      flashPass: 'Available',
      year: '2005',
      history: 'ABC Rides',
      rating: 'Mild'
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
      flashPass: 'Available',
      year: '2003',
      history: 'Hampton Rides',
      rating: 'Mild'
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
      flashPass: 'Available',
      year: '2007',
      history: 'Chance Rides',
      rating: 'Mild'
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
      flashPass: 'Available',
      year: '2010',
      history: 'Gravitron',
      rating: 'Mild'
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
      flashPass: 'Available',
      year: '2007',
      history: 'ABC Rides',
      rating: 'Mild'
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
      flashPass: 'Available',
      year: '2010',
      history: 'Fun Rides Tech',
      rating: 'Mild'
    },

    {
      name: "Pepe La Pew's Tea Party",
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Pepe-Le-Pews-Tea-Party-App-Detail-Image.jpg',
      description:
        'It was love at first sight when skunky Pepe Le Pew first saw his lady—too bad she was a cat!  But that didn’t stop smelly Pepe, he’s just too romantic to quit.  Now your little gang of skunks can feel just as woozy as Pepe does chasing his true love, on this spinning set of mini-teacups.',
      height: '42"',
      capacity: '20 people',
      parkLocation: 'Bugs Bunny World',
      flashPass: 'Available',
      year: '2010',
      history: 'Fun Rides Tech',
      rating: 'Mild'
    },

    {
      name: "Sylvester's Pounce and Bounce",
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/teaser_SylvesterPounceAndBounce_WASH.jpg',
      description:
        'Take a seat and pounce with silly Sylvester all the way to the top of a 20-foot tall tower. But look out, Tweety’s waiting up there to konk Sylvester on the head and send the whole gang bouncing down in a wobbly, jiggly, bouncy ride. But never too fast, as this tower drop is for the younger cats. You’ll jounce and flounce in fits and starts, drop down, then glide back up, then back down—this silly cat can’t keep track!  You may not purr but you’ll definitely have a laugh attack!',
      height: '36"',
      capacity: '6 people',
      parkLocation: 'Bugs Bunny World',
      rideFee: 'No Additional Fees',
      flashPass: 'No',
      year: '1994',
      history: 'Manufacturer: Bolliger & Mabillard',
      rating: 'Mild'
    },

    {
      name: "Taz's Trucking Co.",
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/teaser_TazsTruckingCompany_LA.jpg',
      description:
        'Young truckers get ready to hit the road at Taz’s Trucking Company!  Big colorful trucks with giant wheels drive like oversized toys come to life on this pint-sized course. Taz’s sawmill is the scene, and your job is to haul lumber with your big vehicles. It seems Taz chewed up a lot of wood and needs you to haul it away.',
      height: '42"',
      capacity: '2 people',
      parkLocation: 'Bugs Bunny World',
      rideFee: 'No Additional Fees',
      flashPass: 'Available',
      year: '1994',
      history: 'Manufacturer: Bolliger & Mabillard',
      rating: 'Mild'
    },
    {
      name: "Tweety's Escape",
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/teaser_TweetysEscape_LA.jpg',
      description:
        'On this swinging, circling ride, every rider gets their very own giant birdcage to climb inside. Then each individual cage lifts off the ground and sways in a floaty circle around the centerpiece, featuring murals of Granny, Tweety, and Sylvester tiptoeing around. But that big cat should know that when you’re in your own personal birdcage there’s no way he can catch you! Suspended from a golden awning, the little birdcages full of your little birds keep circling until the coast is clear.',
      height: '36"',
      capacity: '2 people',
      parkLocation: 'Bugs Bunny World',
      rideFee: 'No Additional Fees',
      flashPass: 'Available',
      year: '2010',
      history: 'Manufacturer: Bolliger & Mabillard',
      rating: 'Mild'
    },
    {
      name: 'Whisltestop Train',
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/sfne_neexpress_1440x1533_1.jpg',
      description:
        'You can ride the Whistlestop Train on its brightly colored engine, pulling out of the station for a magical ride through Whistlestop Park. Or take the Magic Flyer Roller Coaster, whose big green engine will take the tykes on a sweet open-air junior train coaster ride up a 10 foot tall hill! There’s a lot to keep you busy in this charming little train village. Whether you’re taking a breather from the action or your little ones just love locomotives, Whistlestop Park is a great destination to visit.',
      height: '48"',
      capacity: '20 people',
      parkLocation: 'Whistlestop Park',
      rideFee: 'No Additional Fees',
      flashPass: 'Available',
      year: '2010',
      history: 'Manufacturer: Bolliger & Mabillard',
      rating: 'Mild'
    },
    {
      name: "Yosemite Sam's Flight School",
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/teaser_YosemiteSamsFlightSchool_LA.jpg',
      description:
        'It’s never too early to learn how to fly. That ornery cowboy Yosemite Sam is your host as you fly away in your very own youngster-sized airplane! Pick out your favorite color propeller plane and get ready to take off into the air, flying round and round and up and down, just like a real airplane! You can hear those propellers whirr as the engines start and you soar up into the air. You can stay low to the ground, or pull back on the steering wheel — you decide how high you want to fly! When you come down for a landing, you’re sure to want to fly again. For your little pilot’s first flight, let Yosemite Sam show you how it’s done.',
      height: '42"',
      capacity: '20 people',
      parkLocation: 'Bugs Bunny World',
      rideFee: 'No Additional Fees',
      flashPass: 'Available',
      year: '2010',
      history: 'Manufacturer: Bolliger & Mabillard',
      rating: 'Mild'
    },
    {
      name: 'TEST ONE',
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Swashbuckler-Web-Banner.jpg',
      description:
        'It’s never too early to learn how to fly. That ornery cowboy Yosemite Sam is your host as you fly away in your very own youngster-sized airplane! Pick out your favorite color propeller plane and get ready to take off into the air, flying round and round and up and down, just like a real airplane! You can hear those propellers whirr as the engines start and you soar up into the air. You can stay low to the ground, or pull back on the steering wheel — you decide how high you want to fly! When you come down for a landing, you’re sure to want to fly again. For your little pilot’s first flight, let Yosemite Sam show you how it’s done.',
      height: '42"',
      capacity: '20 people',
      parkLocation: 'Bugs Bunny World',
      rideFee: 'No Additional Fees',
      flashPass: 'Available',
      year: '2010',
      history: 'Manufacturer: Bolliger & Mabillard',
      rating: 'Mild'
    },
    {
      name: 'TEST TWO',
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Swashbuckler-Web-Banner.jpg',
      description:
        'It’s never too early to learn how to fly. That ornery cowboy Yosemite Sam is your host as you fly away in your very own youngster-sized airplane! Pick out your favorite color propeller plane and get ready to take off into the air, flying round and round and up and down, just like a real airplane! You can hear those propellers whirr as the engines start and you soar up into the air. You can stay low to the ground, or pull back on the steering wheel — you decide how high you want to fly! When you come down for a landing, you’re sure to want to fly again. For your little pilot’s first flight, let Yosemite Sam show you how it’s done.',
      height: '42"',
      capacity: '20 people',
      parkLocation: 'Bugs Bunny World',
      rideFee: 'No Additional Fees',
      flashPass: 'Available',
      year: '2010',
      history: 'Manufacturer: Bolliger & Mabillard',
      rating: 'Mild'
    },
    {
      name: 'TEST THREE',
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Swashbuckler-Web-Banner.jpg',
      description:
        'It’s never too early to learn how to fly. That ornery cowboy Yosemite Sam is your host as you fly away in your very own youngster-sized airplane! Pick out your favorite color propeller plane and get ready to take off into the air, flying round and round and up and down, just like a real airplane! You can hear those propellers whirr as the engines start and you soar up into the air. You can stay low to the ground, or pull back on the steering wheel — you decide how high you want to fly! When you come down for a landing, you’re sure to want to fly again. For your little pilot’s first flight, let Yosemite Sam show you how it’s done.',
      height: '42"',
      capacity: '20 people',
      parkLocation: 'Bugs Bunny World',
      rideFee: 'No Additional Fees',
      flashPass: 'Available',
      year: '2010',
      history: 'Manufacturer: Bolliger & Mabillard',
      rating: 'Mild'
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
