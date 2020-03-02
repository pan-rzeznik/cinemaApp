export class Trailer {
    constructor(public l: string) {}

    getSourceUrl(): string {
        const suffix = `https://www.youtube.com/watch?v=`;
        const movieId = this.l.slice(suffix.length, this.l.length);
        const url = `https://www.youtube.com/embed/${movieId}?modestbranding=1&showinfo=0&rel=0`;
        return url;
    }
}
