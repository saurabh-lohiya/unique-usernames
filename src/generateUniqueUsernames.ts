import {
    quirkyAdjectives,
    quirkyNouns,
    marvelNouns,
    cartoonNouns,
    animeNouns,
    nfsAdjectives,
} from "./constant"

type AdjectiveGenre = "quirky" | "nfs"
type NounGenre = "quirky" | "marvel" | "cartoons" | "anime"

const genreAdjectives: Record<AdjectiveGenre, string[]> = {
    quirky: quirkyAdjectives,
    nfs: nfsAdjectives,
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
    isUsernameTaken?: (username: string) => boolean // Made optional
} = {}) {
    const adjectives = genreAdjectives[adjectiveGenre]
    const nouns = genreNouns[nounGenre]

    let username: string
    do {
        const randomNumber = serial ?? Math.floor(Math.random() * 1000)
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
    } while (isUsernameTaken(username))

    return username
}
