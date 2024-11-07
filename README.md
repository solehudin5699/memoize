# memoize

memoize is a simple javaScript library that provides memoization functionality. By using memoization, you can cache the results of expensive function computations, enhancing application performance by avoiding repeated calculations.

## Features

-   **Performance Optimization**: Reduces function execution time by caching previous results.
-   **Simple and Easy to Use**: Can be implemented in a single line for any function.
-   **Lightweight**: Has no external dependencies, making it ideal for projects of all sizes.

## Installation

```bash
npm install @solehudin5699/memoize
```

## Usage

### Basic Usage with Synchronous Functions

```javascript
import memoize from '@solehudin5699/memoize';

// Basic synchronous function
const square = (num) => {
    console.log('Calculating square...');
    return num * num;
};

// Memoize the function
const memoizedSquare = memoize(square);

console.log(memoizedSquare(5)); // Outputs: Calculating square... 25
console.log(memoizedSquare(5)); // Cached result: 25, no re-calculation
console.log(memoizedSquare(6)); // Re-calculation: Calculating square... 36
```

### Using Memoize with Asynchronous Functions (Promises)

```javascript
// Simulated async function (e.g., an API call)
const fetchData = async (url) => {
    console.log(`Fetching data from ${url}...`);
    const response = await fetch(url);
    return await response.json();
};

// Memoize the asynchronous function
const memoizedFetchData = memoize(fetchData);

(async () => {
    const url = 'https://api.example.com/data';

    // First call, data is fetched and cached
    const data1 = await memoizedFetchData(url);
    console.log(data1);

    // Second call with the same argument, result is retrieved from cache
    const data2 = await memoizedFetchData(url);
    console.log(data2); // No fetching this time, data is from cache
})();
```

### Setting Cache Expiration

```javascript
// Memoize with expiration (e.g., 5 minutes or 300 s)
const memoizedFetchDataWithExpiry = memoize(fetchData, { maxAge: 300 });
```

## API

`memoize(fn,options)`

Creates a new function that caches the result of fn for each unique argument provided.

-   Parameters:
    -   fn - The function to memoize.
    -   options - options for settiing expiration, options->`{maxAge:number//in seconds}`
-   Returns:
    A memoized version of the function, which will return cached results for repeated arguments.

## Contributing

If you would like to contribute to this project, please fork this repository and create a pull request. We welcome suggestions and improvements!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
