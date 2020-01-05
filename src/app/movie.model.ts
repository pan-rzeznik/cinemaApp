export interface Movie {
    id?: string;
    title: string;
    description: string;
    duration: string;
    rating: number;
    role?: string;
    age?: string;
    director?: string;
    mainPoster: string;
    backgroundImg?: string;
    type: string;
    trailers?: string[];
    emissions?: Emmission[];
    emissionsDays?: number[];
}


export interface Emmission {
    date: Date;
    hours: {hour: string, type: string, sound?: boolean}[];
    dateInSecond?: number;
}
