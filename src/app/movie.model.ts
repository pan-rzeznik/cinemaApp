export class Movie {
    title: string;
    description: string;
    duration: string;
    rating: number;
    age?: string;
    director?: string;
    mainPoster: string;
    backgroundImg?: string;
    type: string[];
    emissions?: Emmission[];
}


export interface Emmission {
    date: Date;
    hours: {hour: string, type: string}[];
}
