import {
    quirkyAdjectives,
    quirkyNouns,
    marvelNouns,
    cartoonNouns,
    animeNouns,
    nfswAdjectives
} from "./constant"

type AdjectiveGenre = "quirky" | "nfsw"
type NounGenre = "quirky" | "marvel" | "cartoons" | "anime"

const genreAdjectives: Record<AdjectiveGenre, string[]> = {
    quirky: quirkyAdjectives,
    nfsw: nfswAdjectives,
}

const genreNouns: Record<NounGenre, string[]> = {
    quirky: quirkyNouns,
    marvel: marvelNouns,
    cartoons: cartoonNouns,
    anime: animeNouns,
}

export function generateUniqueUsername({
    adjectiveGenre = "quirky",
    nounGenre = "quirky",
    serial,
    separator = false,
    shouldCapitalize = false,
    isUsernameTaken = () => false,
}: {
    adjectiveGenre?: AdjectiveGenre
    nounGenre?: NounGenre
    serial?: number
    separator?: boolean
    shouldCapitalize?: boolean
    isUsernameTaken?: (username: string) => boolean
} = {}) {
    const adjectives = genreAdjectives[adjectiveGenre]
    const nouns = genreNouns[nounGenre]

    const maxAttempts = 1000 // Limit attempts to avoid infinite loops
    let attempt = 0
    let username: string

    do {
        if (attempt >= maxAttempts) {
            throw new Error("Unable to generate a unique username after multiple attempts.")
        }

        const randomNumber = serial ?? Math.floor(Math.random() * 1_000_000) // Support up to 1M users
        const randomAdjective =
            adjectives[Math.floor(Math.random() * adjectives.length)]
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]

        const separatorChar = separator && Math.random() < 0.5 ? "_" : ""
        username = `${randomAdjective}${separatorChar}${randomNoun}`
        if (shouldCapitalize) {
            username = username
                .split(separatorChar)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(separatorChar)
        }

        username = `${username}${randomNumber}`
        attempt++
    } while (isUsernameTaken(username))

    return username
}
