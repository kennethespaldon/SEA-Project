const players = {
  "LeBron James": {
    stats: {
      regularSeason: {
        gamesPlayed: 70,
        pointsPerGame: 24.4,
        reboundsPerGame: 7.8,
        assistsPerGame: 8.2,
        stealsPerGame: 1.0,
        blocksPerGame: 0.6,
        fieldGoalPct: 54.0,
        threePointPct: 37.6,
        freeThrowPct: 78.2,
      },
      playoffs: {
        gamesPlayed: 5,
        pointsPerGame: 27.8,
        reboundsPerGame: 6.8,
        assistsPerGame: 8.8,
        stealsPerGame: 2.4,
        blocksPerGame: 1.0,
        fieldGoalPct: 56.6,
        threePointPct: 38.5,
        freeThrowPct: 73.9,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [2009, 2010, 2012, 2013],
      },
      dpoy: {
        yearsAwarded: [],
      },
      allNBA: {
        yearsAwarded: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      },
      allDefense: {
        yearsAwarded: [2009, 2010, 2011, 2012, 2013, 2014],
      },
    },
    team: "Los Angeles Lakers",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg",
  },
  "Kawhi Leonard": {
    stats: {
      regularSeason: {
        gamesPlayed: 37,
        pointsPerGame: 21.5,
        reboundsPerGame: 5.9,
        assistsPerGame: 3.1,
        stealsPerGame: 1.6,
        blocksPerGame: 0.5,
        fieldGoalPct: 49.8,
        threePointPct: 41.1,
        freeThrowPct: 81.0,
      },
      playoffs: {
        gamesPlayed: 2,
        pointsPerGame: 12.0,
        reboundsPerGame: 8.0,
        assistsPerGame: 2.0,
        stealsPerGame: 2.0,
        blocksPerGame: 0.5,
        fieldGoalPct: 45.8,
        threePointPct: 0.0,
        freeThrowPct: 66.7,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [],
      },
      dpoy: {
        yearsAwarded: [2015, 2016],
      },
      allNBA: {
        yearsAwarded: [2016, 2017, 2019],
      },
      allDefense: {
        yearsAwarded: [2014, 2015, 2016, 2017, 2019],
      },
    },
    team: "Los Angeles Clippers",
    image: "https://cdn.britannica.com/10/258410-050-88518061/NAB-basketball-Kawhi-Leonard-LA-Clippers-free-throw-against-Dallas-Mavericks-2023.jpg",
  },
  "Giannis Antetokounmpo": {
    stats: {
      regularSeason: {
        gamesPlayed: 67,
        pointsPerGame: 30.4,
        reboundsPerGame: 11.9,
        assistsPerGame: 6.5,
        stealsPerGame: 0.9,
        blocksPerGame: 1.2,
        fieldGoalPct: 60.1,
        threePointPct: 22.2,
        freeThrowPct: 61.7,
      },
      playoffs: {
        gamesPlayed: 3,
        pointsPerGame: 23.3,
        reboundsPerGame: 11.0,
        assistsPerGame: 5.3,
        stealsPerGame: 0.3,
        blocksPerGame: 0.7,
        fieldGoalPct: 52.8,
        threePointPct: 0,
        freeThrowPct: 45.2,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [2019, 2020],
      },
      dpoy: {
        yearsAwarded: [2021],
      },
      allNBA: {
        yearsAwarded: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      },
      allDefense: {
        yearsAwarded: [2017, 2019, 2020, 2021, 2022],
      },
    },
    team: "Milwaukee Bucks",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Giannis_Antetokounmpo_%2824845003687%29_%28cropped%29.jpg",
  },
  "Stephen Curry": {
    stats: {
      regularSeason: {
        gamesPlayed: 70,
        pointsPerGame: 24.5,
        reboundsPerGame: 4.4,
        assistsPerGame: 6.0,
        stealsPerGame: 1.9,
        blocksPerGame: 0.2,
        fieldGoalPct: 44.8,
        threePointPct: 39.7,
        freeThrowPct: 93.3,
      },
      playoffs: {
        gamesPlayed: 13,
        pointsPerGame: 30.5,
        reboundsPerGame: 5.2,
        assistsPerGame: 6.1,
        stealsPerGame: 1.0,
        blocksPerGame: 0.5,
        fieldGoalPct: 46.6,
        threePointPct: 36.3,
        freeThrowPct: 84.5,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [2015, 2016],
      },
      dpoy: {
        yearsAwarded: [],
      },
      allNBA: {
        yearsAwarded: [2014, 2015, 2016, 2017, 2018, 2019, 2021, 2022, 2023, 2024],
      },
      allDefense: {
        yearsAwarded: [],
      },
    },
    team: "Golden State Warriors",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Stephen_Curry_shooting.jpg/250px-Stephen_Curry_shooting.jpg",
  },
  "Jayson Tatum": {
    stats: {
      regularSeason: {
        gamesPlayed: 72,
        pointsPerGame: 26.8,
        reboundsPerGame: 8.7,
        assistsPerGame: 6.0,
        stealsPerGame: 1.1,
        blocksPerGame: 0.5,
        fieldGoalPct: 45.2,
        threePointPct: 34.3,
        freeThrowPct: 81.4,
      },
      playoffs: {
        gamesPlayed: 19,
        pointsPerGame: 25.0,
        reboundsPerGame: 9.7,
        assistsPerGame: 6.3,
        stealsPerGame: 1.1,
        blocksPerGame: 0.7,
        fieldGoalPct: 42.7,
        threePointPct: 28.3,
        freeThrowPct: 86.1,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [],
      },
      dpoy: {
        yearsAwarded: [],
      },
      allNBA: {
        yearsAwarded: [2020, 2022, 2023, 2024],
      },
      allDefense: {
        yearsAwarded: [],
      },
    },
    team: "Boston Celtics",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Jayson_Tatum_%282018%29.jpg",
  },
  "Luka Doncic": {
    stats: {
      regularSeason: {
        gamesPlayed: 50,
        pointsPerGame: 28.2,
        reboundsPerGame: 8.2,
        assistsPerGame: 7.7,
        stealsPerGame: 1.8,
        blocksPerGame: 0.4,
        fieldGoalPct: 45.0,
        threePointPct: 36.8,
        freeThrowPct: 78.2,
      },
      playoffs: {
        gamesPlayed: 22,
        pointsPerGame: 28.9,
        reboundsPerGame: 9.5,
        assistsPerGame: 8.1,
        stealsPerGame: 1.9,
        blocksPerGame: 0.4,
        fieldGoalPct: 44.6,
        threePointPct: 32.2,
        freeThrowPct: 76.5,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [],
      },
      dpoy: {
        yearsAwarded: [],
      },
      allNBA: {
        yearsAwarded: [2020, 2021, 2022, 2023, 2024],
      },
      allDefense: {
        yearsAwarded: [],
      },
    },
    team: "Los Angeles Lakers",
    image: "https://images.sportschau.de/image/60fc1a85-1dcc-4073-9ff6-19a1aa760e4f/AAABlTG5Ddw/AAABkZLrr6A/original/nba-964.jpg",
  },
  "James Harden": {
    stats: {
      regularSeason: {
        gamesPlayed: 50,
        pointsPerGame: 22.8,
        reboundsPerGame: 5.8,
        assistsPerGame: 8.7,
        stealsPerGame: 1.5,
        blocksPerGame: 0.7,
        fieldGoalPct: 41.0,
        threePointPct: 35.2,
        freeThrowPct: 87.4,
      },
      playoffs: {
        gamesPlayed: 22,
        pointsPerGame: 28.9,
        reboundsPerGame: 9.5,
        assistsPerGame: 8.1,
        stealsPerGame: 1.9,
        blocksPerGame: 0.4,
        fieldGoalPct: 44.6,
        threePointPct: 32.2,
        freeThrowPct: 76.5,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [2018],
      },
      dpoy: {
        yearsAwarded: [],
      },
      allNBA: {
        yearsAwarded: [2013, 2014, 2015, 2017, 2018, 2019, 2020],
      },
      allDefense: {
        yearsAwarded: [],
      },
    },
    team: "Los Angeles Clippers",
    image: "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/07/USAT/71484421007-usatsi-21836748.jpg?crop=2555,1916,x332,y217",
  },
  "Nikola Jokic": {
    stats: {
      regularSeason: {
        gamesPlayed: 70,
        pointsPerGame: 29.6,
        reboundsPerGame: 12.7,
        assistsPerGame: 10.2,
        stealsPerGame: 1.8,
        blocksPerGame: 0.6,
        fieldGoalPct: 57.6,
        threePointPct: 41.7,
        freeThrowPct: 80.0,
      },
      playoffs: {
        gamesPlayed: 12,
        pointsPerGame: 28.7,
        reboundsPerGame: 13.4,
        assistsPerGame: 8.7,
        stealsPerGame: 1.4,
        blocksPerGame: 0.7,
        fieldGoalPct: 54.5,
        threePointPct: 26.4,
        freeThrowPct: 90.1,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [2021, 2022, 2024],
      },
      dpoy: {
        yearsAwarded: [],
      },
      allNBA: {
        yearsAwarded: [2019, 2020, 2021, 2022, 2023, 2024],
      },
      allDefense: {
        yearsAwarded: [],
      },
    },
    team: "Denver Nuggets",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Nikola_Jokic_free_throw_%28cropped%29.jpg/220px-Nikola_Jokic_free_throw_%28cropped%29.jpg",
  },
  "Russell Westbrook": {
    stats: {
      regularSeason: {
        gamesPlayed: 75,
        pointsPerGame: 13.3,
        reboundsPerGame: 4.9,
        assistsPerGame: 6.1,
        stealsPerGame: 1.4,
        blocksPerGame: 0.5,
        fieldGoalPct: 44.9,
        threePointPct: 32.3,
        freeThrowPct: 66.1,
      },
      playoffs: {
        gamesPlayed: 6,
        pointsPerGame: 6.3,
        reboundsPerGame: 4.2,
        assistsPerGame: 1.7,
        stealsPerGame: 1.2,
        blocksPerGame: 0.5,
        fieldGoalPct: 26.0,
        threePointPct: 23.5,
        freeThrowPct: 61.5,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [2017],
      },
      dpoy: {
        yearsAwarded: [],
      },
      allNBA: {
        yearsAwarded: [2011, 2012, 2013, 2015, 2016, 2017, 2018, 2019, 2020],
      },
      allDefense: {
        yearsAwarded: [],
      },
    },
    team: "Denver Nuggets",
    image: "https://external-preview.redd.it/shams-former-nba-mvp-russell-westbrook-is-signing-a-two-v0-sb5rtzFyiG2ZJa4ftkL909nOIvnqKqieZXz7J5ucL5A.jpg?width=1080&crop=smart&auto=webp&s=9f888a1513b3473b52cf3587f5f70dda78b8e40b",
  },
  "Kevin Durant": {
    stats: {
      regularSeason: {
        gamesPlayed: 62,
        pointsPerGame: 26.6,
        reboundsPerGame: 6.0,
        assistsPerGame: 4.2,
        stealsPerGame: 0.8,
        blocksPerGame: 1.2,
        fieldGoalPct: 52.7,
        threePointPct: 43.0,
        freeThrowPct: 83.9,
      },
      playoffs: {
        gamesPlayed: 4,
        pointsPerGame: 26.8,
        reboundsPerGame: 6.5,
        assistsPerGame: 3.3,
        stealsPerGame: 0.5,
        blocksPerGame: 1.5,
        fieldGoalPct: 55.2,
        threePointPct: 41.7,
        freeThrowPct: 82.4,
      }
    },
    awards: {
      mvp: {
        yearsAwarded: [2014],
      },
      dpoy: {
        yearsAwarded: [],
      },
      allNBA: {
        yearsAwarded: [2010, 2011, 2012, 2013, 2014, 2016, 2017, 2018, 2019, 2022, 2024],
      },
      allDefense: {
        yearsAwarded: [],
      },
    },
    team: "Phoenix Suns",
    image: "https://www.azcentral.com/gcdn/authoring/authoring-images/2024/11/07/PPHX/76105641007-usatsi-24695442.jpg?crop=3401,3400,x1317,y0",
  },
};