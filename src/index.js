import {
    quirkyAdjectives,
    quirkyNouns,
    marvelNouns,
    cartoonNouns,
    animeNouns,
    nfswAdjectives,
} from "./constant";

const genreAdjectives = {
    quirky: quirkyAdjectives,
    nfsw: nfswAdjectives,
};

const genreNouns = {
    quirky: quirkyNouns,
    marvel: marvelNouns,
    cartoons: cartoonNouns,
    anime: animeNouns,
};

export function generateUniqueUsername({
    adjectiveGenre = "quirky",
    nounGenre = "quirky",
    serial,
    separator = false,
    shouldCapitalize = false,
    isUsernameTaken = () => false,
} = {}) {
    const adjectives = genreAdjectives[adjectiveGenre];
    const nouns = genreNouns[nounGenre];

    const maxAttempts = 1000; // Limit attempts to avoid infinite loops
    let attempt = 0;
    let username;

    do {
        if (attempt >= maxAttempts) {
            throw new Error("Unable to generate a unique username after multiple attempts.");
        }

        const randomNumber = serial ?? Math.floor(Math.random() * 1_000_000); // Support up to 1M users
        const randomAdjective =
            adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

        const separatorChar = separator && Math.random() < 0.5 ? "_" : "";
        username = `${randomAdjective}${separatorChar}${randomNoun}`;
        if (shouldCapitalize) {
            username = username
                .split(separatorChar)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(separatorChar);
        }

        username = `${username}${randomNumber}`;
        attempt++;
    } while (isUsernameTaken(username));

    return username;
}
