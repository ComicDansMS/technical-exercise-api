# Technical Challenge - Movie API

## Installation and setup

1. Install node modules with `npm install`
2. Create the `.env` file based on the `.env.example`
  - Setting a port is optional. By default, port 3000 is used
  - You must specify an array of API keys for authentication purposes
3. Run `npm run dev`

## Usage

- Requests must be sent to the `/api/movies` endpoint along with the required query parameters
- Your API key must be included in the header `x-api-key`
- Query parameters include:
  - `title`: string (optional)
  - `years`: Array of numbers (optional)
  - `genres`: Array of strings (optional)
  - `limit`: The limit for returned results (optional)
- The response will consist of an array of movie objects

