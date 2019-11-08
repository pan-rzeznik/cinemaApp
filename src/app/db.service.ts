import { log } from 'util';
import { Movie, Emmission } from './movie.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  movies = [
    {
      title: 'Był sobie pies',
      description: `Wszystkie psy doskonale wiedzą, że życie ma sens tylko u boku
      ukochanego pana lub pani. Ale czasem trzeba się nieźle nabiegać, żeby za nimi nadążyć.
      Bailey dostaje od swojego ukochanego Ethana nowy cel...`,
      duration: '190 min',
      rating: 4.6,
      type: ['Familijny', 'Komedia'],
      mainPoster: 'https://www.planetcinema.pl/_cache/movies/300-0/fit/by-sobie-pies-2-pl_0811792f6c.jpg',
      emissions: [
        {
          date: new Date(2019, 10, 24),
          hours: [
            {
              hour: '15:00',
              type: '2D'
            },
            {
              hour: '18:00',
              type: '3D'
            }
          ]
        },
        {
          date: new Date(2019, 10, 25),
          hours: [
            {
              hour: '11:00',
              type: '2D'
            },
            {
              hour: '15:00',
              type: '2D'
            }
          ]
        }, {
          date: new Date(2019, 10, 26),
          hours: [
            {
              hour: '10:00',
              type: '2D'
            }
          ]
        },
      ]
    },
    {
      title: 'ANGRY BIRDS FILM 2',
      description: `Skomplikowana relacja nielotów Angry Birds oraz sprytnych Zielonych Świnek przenosi
       się na wyższy poziom. Kiedy wyspy zamieszkane przez Angry Birds i Świnki znajdą się w niebezpieczeństwie Zielonych Świprzenosi.`,
      duration: '130 min',
      rating: 4.1,
      type: ['Animacja', 'Komedia'],
      mainPoster: 'https://images-na.ssl-images-amazon.com/images/I/71tTeVCieBL._SY679_.jpg',
      emissions: [
        {
          date: new Date(2019, 10, 1),
          hours: [
            {
              hour: '15:00',
              type: '2D'
            },
            {
              hour: '18:00',
              type: '3D'
            }
          ]
        },
      ]
    },
    {
      title: 'Joker',
      description: `Historia jednego z cieszących się najgorszą sławą superprzestępców uniwersum DC — Jokera.
      Przedstawiony przez Phillipsa obraz śledzi losy kultowego czarnego charakteru, człowieka zepchniętego na margines. `,
      duration: '170 min',
      rating: 3.2,
      type: ['Dramat', 'Kryminał'],
      mainPoster: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/09/Joker-Movie-Fandango-Poster.jpg?q=50&fit=crop&w=738&h=922',
      emissions: [
        {
          date: new Date(2019, 10, 3),
          hours: [
            {
              hour: '15:00',
              type: '2D'
            },
            {
              hour: '18:00',
              type: '3D'
            }
          ]
        },
      ]
    },
    {
      title: 'Był sobie pies',
      description: `Wszystkie psy doskonale wiedzą, że życie ma sens tylko u boku
      ukochanego pana lub pani. Ale czasem trzeba się nieźle nabiegać, żeby za nimi nadążyć.
      Bailey dostaje od swojego ukochanego Ethana nowy cel...`,
      duration: '190 min',
      rating: 4.6,
      type: ['Familijny', 'Komedia'],
      mainPoster: 'https://www.planetcinema.pl/_cache/movies/300-0/fit/by-sobie-pies-2-pl_0811792f6c.jpg',
      emissions: [
        {
          date: new Date(2019, 10, 3),
          hours: [
            {
              hour: '15:00',
              type: '2D'
            },
            {
              hour: '18:00',
              type: '3D'
            }
          ]
        },
      ]
    },
  ];

  singleMovie: Movie = {
    title: 'Był sobie pies',
    description: `Wszystkie psy doskonale wiedzą, że życie ma sens tylko u boku
    ukochanego pana lub pani. Ale czasem trzeba się nieźle nabiegać, żeby za nimi nadążyć.
    Bailey dostaje od swojego ukochanego Ethana nowy cel...`,
    duration: '190 min',
    rating: 4.6,
    director: 'Gail Mancuso',
    age: '7 lat',
    backgroundImg: 'https://gfx.dlastudenta.pl/uploads/images/7/cb/byl_sobie_pies2.jpg',
    type: ['Familijny', 'Komedia'],
    mainPoster: 'https://www.planetcinema.pl/_cache/movies/300-0/fit/by-sobie-pies-2-pl_0811792f6c.jpg',
    emissions: [
      {
        date: new Date(2019, 9, 24),
        hours: [
          {
            hour: '15:00',
            type: '2D',
            dubbing: true
          },
          {
            hour: '18:00',
            type: '3D',
            dubbing: true
          }
        ]
      },
      {
        date: new Date(2019, 9, 25),
        hours: [
          {
            hour: '11:00',
            type: '2D',
            dubbing: true
          },
          {
            hour: '15:00',
            type: '3D',
            dubbing: true
          },
          {
            hour: '15:00',
            type: '3D',
            dubbing: true
          }
        ]
      },
      {
        date: new Date(2019, 9, 26),
        hours: [
          {
            hour: '10:00',
            type: '2D'
          }
        ]
      },
      {
        date: new Date(2019, 9, 25),
        hours: [
          {
            hour: '11:00',
            type: '2D'
          },
          {
            hour: '15:00',
            type: '3D'
          },
          {
            hour: '15:00',
            type: '3D'
          }
        ]
      },
      {
        date: new Date(2019, 9, 26),
        hours: [
          {
            hour: '10:00',
            type: '2D'
          }
        ]
      },
      {
        date: new Date(2019, 9, 25),
        hours: [
          {
            hour: '11:00',
            type: '2D'
          },
          {
            hour: '15:00',
            type: '3D'
          },
          {
            hour: '15:00',
            type: '3D'
          }
        ]
      },
      {
        date: new Date(2019, 9, 26),
        hours: [
          {
            hour: '10:00',
            type: '2D'
          }
        ]
      },
      {
        date: new Date(2019, 9, 25),
        hours: [
          {
            hour: '11:00',
            type: '2D'
          },
          {
            hour: '15:00',
            type: '3D'
          },
          {
            hour: '15:00',
            type: '3D'
          }
        ]
      },
      {
        date: new Date(2019, 9, 26),
        hours: [
          {
            hour: '10:00',
            type: '2D'
          }
        ]
      },
    ]
  };

  filterByDate(date: Date): Movie[] {
    const filteredMovies: Movie[] = [];

    this.movies.forEach(movie => {
      const state = movie.emissions.some( d => d.date.getTime() === date.getTime());
      if (state) {
        filteredMovies.push(movie);
      }
    });
    return filteredMovies;
  }
}
