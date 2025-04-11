type AdjectiveGenre = "quirky" | "nfsw";
type NounGenre = "quirky" | "marvel" | "cartoons" | "anime";
export declare function generateUniqueUsername({ adjectiveGenre, nounGenre, serial, separator, shouldCapitalize, isUsernameTaken, }?: {
    adjectiveGenre?: AdjectiveGenre;
    nounGenre?: NounGenre;
    serial?: number;
    separator?: boolean;
    shouldCapitalize?: boolean;
    isUsernameTaken?: (username: string) => boolean;
}): string;
export {};
