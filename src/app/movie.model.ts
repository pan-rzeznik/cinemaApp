export interface Movie {
    id?: string;
    title: string;
    description: string;
    duration: string;
    rating: number;
    age?: string;
    director?: string;
    mainPoster: string;
    backgroundImg?: string;
    type: string;
    trailers: string[];
    emissions?: Emmission[];
}


export interface Emmission {
    date: Date;
    hours: {hour: string, type: string, sound?: boolean}[];
}
