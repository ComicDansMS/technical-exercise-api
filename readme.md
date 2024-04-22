# Technical Challenge - Movie API

## Installation and setup

1. Install node modules with `npm install`
2. Create the `.env` file based on the `.env.example`
  - An array of API keys must be specified for authentication purposes. The default value `123456789` in `.env.example` is also included in the proxy server's `.env.example` for simplicity
3. Run `npm start`

## Usage

- Requests must be sent to the `/api/movies` endpoint along with the required query parameters
- Your API key must be included in the header `x-api-key`
- Query parameters include:
  - `title`: string (optional)
  - `years`: Array of numbers (optional)
  - `genres`: Array of strings (optional)
  - `limit`: The limit for returned results (optional)
- The response will consist of an array of movie objects as per the example below

## Response example

```
[
  {
    "title": "The Delta Force",
    "year": 1986,
    "cast": [
      "Chuck Norris",
      "Lee Marvin"
    ],
    "genres": [
      "Action"
    ],
    "href": "The_Delta_Force",
    "extract": "The Delta Force is a 1986 American action film starring Chuck Norris and Lee Marvin as leaders of an elite group of Special Operations Forces personnel based on the real life U.S. Army Delta Force unit. Directed, co-written and co-produced by Menahem Golan, the film features Martin Balsam, Joey Bishop, Robert Vaughn, Steve James, Robert Forster, Shelley Winters, George Kennedy, and an uncredited Liam Neeson in an early role. It is the first installment in The Delta Force film series. Two sequels were produced, entitled Delta Force 2: The Colombian Connection and the direct-to-video Delta Force 3: The Killing Game. The Delta Force was \"inspired\" by the hijacking of TWA Flight 847.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/8/8d/Delta_force_poster.jpg",
    "thumbnail_width": 258,
    "thumbnail_height": 387
  }
]
  ```



