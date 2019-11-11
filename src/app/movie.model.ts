export class Movie {
    id: string;
    title: string;
    description: string;
    duration: string;
    rating: number;
    age?: string;
    director?: string;
    mainPoster: string;
    backgroundImg?: string;
    type: string;
    emissions?: Emmission[];
}


export class Emmission {
    date: Date;
    hours: {hour: string, type: string, sound?: boolean}[];
}
