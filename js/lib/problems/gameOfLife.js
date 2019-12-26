/*
 * https://github.com/marksoper/life
 * The Conway’s Game of Life Interview Process
 * Conway’s Game of Life is a famous zero-player game where the player sets up and runs a cellular automaton according to a simple but carefully designed set of rules.
 *
 * In-person whiteboard interview
 * Present the rules of the game. Optionally draw an example 3x3 grid and walk through a couple of steps of the game. Ample time should be taken to ensure the interviewee clearly understands the rules.
 *
 * Ask the interviewee to implement on the whiteboard a function that takes a game board and returns the result of that board having been advanced by 1 step. Here you can use whatever language or pseudocode you want. It’s realistic to expect a software engineering candidate to come up with a working function. You may also wish to focus on design of data structures, algorithms, initial assumptions, scalability concerns, etc.
 *
 * Take-home project
 * Ask the candidate to implement the game as a single-page web app. There are lots of variations on the specific requirements — e.g. you might ask the candidate to use a specific framework. Some ideas for requirements:
 *
 * Play — cause the game to run automatically
 * Pause — cause the game to halt if running
 * Single-step — advance one step
 * Resize—modify board dimensions
 * Tick Speed — change the tick duration to speed up or slow down the running game
 * Initial board state — Ability to configure the initial board state
 * Note on take-home projects: Ideally candidates will be compensated for their work.
 *   The scope of this development effort can be constrained to what I believe to be a reasonable time commitment — say ~10 hours — for it to be a reasonable expense for the company or perhaps an acceptable imposition on the candidate it’s not done as a paid engagement.
 *
 * Tools, Libraries, and Languages
 *   Front-end state management: Redux
 *   Build process: Facebook’s Create React App project starter
 *   Front-end components: React
 *   Code-formatting: ESLint & Prettier
 *   Styling & Icons: react-bootstrap
 *   Scalable Vector Graphics (SVG)
 *
 * I used a cartesian coordinate system with origin at top left. As I got into it I began to wish for a centered origin to allow the board to grow in a more balanced way without the top and left boundaries being more likely to be reached before the other two.
 * I’m using a brute-force “step” function to advance the board. I’d like to look into better algorithms like List Life or Hashlife.
 */
