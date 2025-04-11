# unique-usernames

`unique-usernames` is a lightweight and customizable npm package designed to generate unique and creative usernames for apps, organizations, and platforms. Whether you're building a social media app, a gaming platform, or any service that requires unique user identifiers, this package provides a flexible solution tailored to your needs.

## Features

- **Genre-Based Username Generation**: Choose from multiple genres, including quirky, Marvel universe, cartoons, anime, and more.
- **Customizable Formats**: Configure username length, inclusion of separators (e.g., hyphens, underscores), and capitalization.
- **Uniqueness Check**: Optionally ensure usernames are unique by providing a custom `isUsernameTaken` function.
- **Lightweight and Fast**: Optimized for performance and minimal dependencies.

## Installation

Install the package using npm:

```bash
npm install unique-usernames
```

Or with Yarn:

```bash
yarn add unique-usernames
```

## Usage

### Basic Example

```javascript
import { generateUniqueUsername } from 'unique-usernames';

const username = generateUniqueUsername({
    adjectiveGenre: 'quirky',
    nounGenre: 'marvel',
    separator: true,
    shouldCapitalize: true,
});

console.log(username); // Example: Witty_Spiderman123
```

### Advanced Example with Uniqueness Check

```javascript
import { generateUniqueUsername } from 'unique-usernames';

const takenUsernames = new Set(['Witty_Spiderman123']);

const username = generateUniqueUsername({
    adjectiveGenre: 'quirky',
    nounGenre: 'marvel',
    separator: true,
    shouldCapitalize: true,
    isUsernameTaken: (username) => takenUsernames.has(username),
});

console.log(username); // Generates a unique username not in `takenUsernames`
```

## Configuration Options

| Option            | Type                              | Default       | Description                                                                 |
|--------------------|-----------------------------------|---------------|-----------------------------------------------------------------------------|
| `adjectiveGenre`   | `"quirky"`, `"nfsw"`, etc.        | `"quirky"`    | The genre of the adjective.                                                |
| `nounGenre`        | `"quirky"`, `"marvel"`, etc.     | `"marvel"`    | The genre of the noun.                                                     |
| `serial`           | `number`                         | Random number | A specific number to append to the username.                               |
| `separator`        | `boolean`                        | `false`       | Whether to include a separator (e.g., `_` or `-`) between adjective and noun. |
| `shouldCapitalize` | `boolean`                        | `false`       | Whether to capitalize the first letter of each word in the username.       |
| `isUsernameTaken`  | `(username: string) => boolean`  | `() => false` | A function to check if the generated username is already taken.            |

## Genres

The following genres are supported for adjectives and nouns:

### Adjective Genres

- quirky
- nfsw

### Noun Genres

- quirky
- marvel
- cartoons
- anime

## Contributing

Contributions are welcome! If you’d like to add more genres or improve the functionality, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
