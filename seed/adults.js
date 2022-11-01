const db = require('../db')
const Adult = require('../models/adult')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const adults = [
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/Batman-Banner.jpg',
      name: 'Batman The Ride',
      description:
        "BATMAN The Ride will show you what it feels like to be BATMAN, on this deeply intense juggernaut that is definitely not for the timid. Show your strength and bravery as you take on GOTHAM's criminal element. Once you've gotten your fill touring the shady, decaying backstreets of GOTHAM CITY, load up in the batcave for a dark and riveting adventure. You're about to fight crime with your feet just dangling free in the air through 2,700ft./822.96m of track.",
      height: '54"',
      speed: '50 mph',
      capacity: '40 people',
      parkLocation: 'DC Universe',
      rideFee: 'No Additional Fees',
      flashPass: 'No',
      year: '1994',
      history: 'Bolliger & Mabillard',
      rating: 'Maximum'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_dive_devil_1440x1533.jpg',
      name: 'Dive Devil',
      description:
        "Get ready to experience the thrill of skydiving, hang-gliding and bungee jumping all rolled into one!  First you'll have to get to the top of a 152-foot tower before taking a flying leap from the top with nothing but sky to catch your fall!",
      height: '48"',
      capacity: '2 at a time',
      parkLocation: 'Cyclone Bay',
      rideFee: 'Additional fee required',
      flashPass: 'No',
      year: '2000',
      history: 'Bolliger & Mabillard',
      rating: 'Moderate'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Goliath-Banner.jpg',
      name: 'Goliath',
      description:
        "'Sometimes the term roller coaster just doesn't cover it.  Goliath is so fast they call this metal monster a hypercoaster, and within seconds you'll know why. Hike in through the stony ruins of an ancient civilization - a time when great mythical beasts like the Goliath were feared. You may not find it so mythical as you're getting dragged up that impossibly tall first hill, lifting you higher and higher. About halfway up this ridiculous height, even the toughest riders realize there's no way out except to battle the beast. When you crest the top of that first hill, wave to the legendary Twisted Colossus – way down below you",
      height: '48"',
      speed: '85 mph',
      capacity: '36',
      parkLocation: 'Goliath Plaza',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '2000',
      history: 'Giovanola',
      rating: 'Maximum'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Scream-Banner.jpg',
      name: 'Scream',
      description:
        "Ever wonder what it feels like to fly through the air, without a plane, a jetpack, or even a pair of wings to hold you up? Well, get ready to get airborne. Scream features a totally one-of-a-kind floorless train design.  Look straight down and all you'll see is the ground or the sky, depending on which direction you're facing. Since there's no track over your head or under your feet, riding Scream is exactly what it feels like to fly.",
      height: '54"',
      speed: '65 mph',
      capacity: '40',
      parkLocation: 'Screampunk District',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '2003',
      history: 'Bolliger & Mabillard',
      rating: 'Moderate'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_viper2-1-2048x1363.jpg',
      name: 'Viper',
      description:
        "Since it was built Viper has been one of the tallest and fastest looping roller coasters in the world. Just looking at Viper's collection of loops from the ground will boggle the mind, but there's only one way to truly appreciate the extreme intensity of a vertical loop, and that's to ride it!",
      height: '54"',
      speed: '70 mph',
      capacity: '45',
      parkLocation: 'Baja Ridge',
      rideFee: 'No Additional Fee',
      flashPass: 'Yes',
      year: '1990',
      history: 'Arrow Dynamics Inc. ',
      rating: 'Maximum'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/wcr-newsletter_1_0-1-2048x1365.jpg',
      name: 'West Coast Racers',
      description:
        "ALL NEW THRILLS! Get ready for West Coast Racers, the world's first single track quadruple launch racing coaster!  Unlike traditional coasters, this first of it's kind racing coaster features two side-by-side tracks with four individual high-speed launches.  The race covers two complete laps, multiple airtime hills, extreme high-banked turns and exhilarating over/under near misses.  A highlight of the ride is an immersive real time pit stop designed and produced by world famous West Coast Customs that will provide you with a racing experience unlike any other.",
      height: '54"',
      speed: '55 mph',
      capacity: '15',
      parkLocation: 'The Underground',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '2018',
      history: 'Arrow Dynamics Inc. ',
      rating: 'Maximum'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/wcr-newsletter_1_0-1-2048x1365.jpg',
      name: 'TEST RIDE',
      description:
        "ALL NEW THRILLS! Get ready for West Coast Racers, the world's first single track quadruple launch racing coaster!  Unlike traditional coasters, this first of it's kind racing coaster features two side-by-side tracks with four individual high-speed launches.  The race covers two complete laps, multiple airtime hills, extreme high-banked turns and exhilarating over/under near misses.  A highlight of the ride is an immersive real time pit stop designed and produced by world famous West Coast Customs that will provide you with a racing experience unlike any other.",
      height: '54"',
      speed: '55 mph',
      capacity: '15',
      parkLocation: 'The Underground',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '2018',
      history: 'Arrow Dynamics Inc. ',
      rating: 'Maximum'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/Apocalypse-Banner-2-1.jpg',
      name: 'Apocalypse',
      description:
        "Head into the bunker and get ready to launch into the front line of battle on this blazingly fast drive into sci-fi combat. Future war has turned the world into a bleak, burned out wasteland and you are living the aftermath. Apocalypse is the all-wooden roller coaster that rips through this ominous desert on an ultra-fast track. You've gotta ride like the wind to escape.",
      height: '48"',
      capacity: '40',
      parkLocation: 'The Underground',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '2009',
      history: 'Great Coasters International Inc. (GCII)',
      rating: 'Moderate'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/mn_FullThrottle_LA.jpg',
      name: 'Full Throttle',
      description:
        "Here it is, the latest in a long history of world records set at Six Flags Magic Mountain:  Full Throttle. The number one tallest and fastest looping roller coaster in the world.  You are riding the best of the best and it can't be topped.",
      height: '54"',
      speed: '70 mph',
      capacity: '32',
      parkLocation: 'Six Flags Plaza',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '2018',
      history: 'Great Coasters International Inc. (GCII)',
      rating: 'Maximum'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfmm_gold_rusher_1440x1533-1.jpg',
      name: 'Gold Rusher',
      description:
        "Travel back to the days of the California gold rush, when brave prospectors traveled deep into the mountains looking for those elusive golden nuggets. You'll dive into an old mining car for this crazy ride through the treacherous hills of the frontier. Gold Rusher was the very first roller coaster at Six Flags Magic Mountain, and this rip roarin' ride is as fun today as it was the day it opened.",
      height: '48"',
      speed: '35 mph',
      capacity: '36',
      parkLocation: 'Metropolis',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '1971',
      history: 'Arrow Dynamics Inc.',
      rating: 'Moderate'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Lex-Luthor-Drop-of-Doom-Banner.jpg',
      name: 'Lex Luthor: Drop of Doom',
      description:
        "LEX LUTHOR's corporation LexCorp is certainly up to no good.  LEX is bent on world domination, and he's starting by destroying your sanity on this thrilling descent. This is the tallest and fastest drop tower on the planet - the ultimate free fall!",
      height: '48"',
      speed: '85 mph',
      capacity: '14',
      parkLocation: 'DC Universe',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '2012',
      history: 'Intamin AG',
      rating: 'Maximum'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Ninja-Banner-2.jpg',
      name: 'Ninja',
      description: `There's a reason Ninja is known as "The Black Belt of Roller Coasters" This thrill is a suspended swinging roller coaster. There are only four of this kind in the entire U.S. and you're about to ride one of them. You're hanging from the track, which on this insane ride is above your head. Shoulder harnesses secure you in place but don't expect to just sit in one place — you're going to be swinging all over, a full 90 degrees each way along 2,700ft./822.9m of track above you.`,
      height: '42"',
      speed: '55 mph',
      capacity: '40',
      parkLocation: 'Samurai Summit',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '1988',
      history: 'Arrow Dynamics Inc.',
      rating: 'Moderate'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Superman-Escape-Krypton-Web-Banner.jpg',
      name: 'SUPERMAN: Escape from Krypton',
      description:
        "Tunnel deep into SUPERMAN's icy Fortress of Solitude to face the ultimate challenge—1,315 feet of track that bends straight up into the sky 415 feet high!",
      height: '48"',
      speed: '100 mph',
      capacity: '48',
      parkLocation: 'Samurai Summit',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '2011',
      history: 'Intamin',
      rating: 'Maximum'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Tatsu-Banner-2.jpg',
      name: 'Tatsu',
      description:
        "Tatsu is a flying roller coaster with an utterly unique way to ride—face down.  This mad twist puts you in a one-on-one stare-down with planet Earth, as you fly at speeds up to 62 miles per hour. The structure itself is 170 feet tall, but when combined with the height of the mountain it's sitting on, you're in for a 263-foot elevation change over the course of the journey.",
      height: '54"',
      speed: '62 mph',
      capacity: '48',
      parkLocation: 'Rapids Camp Crossing',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '2012',
      history: 'Intamin',
      rating: 'Maximum'
    },
    {
      image:
        'https://sf-static.sixflags.com/wp-content/uploads/2020/04/sixflagsbattleselects_148.sized__0.jpg',
      name: "THE RIDDLER's Revenge",
      description:
        "You have to stand up to a villain like THE RIDDLER, and that's exactly what this record-setting stand-up roller coaster has in store for you. You'll have to take on this scoundrel standing, not sitting down in a chair, while it takes you through the highest, fastest, longest stand-up track in the world. Not only that, but it also has the biggest loop and the most upside-down action for any stand-up coaster.",
      height: '54"',
      speed: '65 mph',
      capacity: '48',
      parkLocation: 'Metropolis',
      rideFee: 'No Additional Fees',
      flashPass: 'Yes',
      year: '1998',
      history: 'Bolliger & Mabillard',
      rating: 'Maximum'
    }
  ]

  await Adult.insertMany(adults)
  console.log('Created some adults!')
}
const run = async () => {
  await main()
  db.close()
}

run()
