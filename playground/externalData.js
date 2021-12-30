// An asynchronous language is merely a language that can execute subsequent lines of code when previous lines of code aren’t fully resolved
// A Promise is an object that takes an asynchronous action and calls one of two methods based on the response. If it is successful, or fulfilled, the promise passes the results to a then() method
// If the action fails or is 'rejected', the promise calls the catch() method
const { get } = require('http');
const { resolve } = require('path');
const fetch = require('node-fetch');

// Tip: Retrieve Data Asynchronously with Promises
const getUserPreferences = () => {
  const preferences = new Promise((resolve, reject) => {
    resolve({
      theme: 'dusk',
    });
  });
  return preferences;
}

// getUserPreferences().then((preferences) => { // .then() if the promise returns successfully / fulfilled
//   console.log(preferences.theme);
// });

// const failUserPreferences = () => {
//     const finder = new Promise((resolve, reject) => {
//         reject({
//             type: 'Access Denied',
//         });
//     });
//     return finder;
// }

// failUserPreferences()
//     .then(preferences => {
//         // This won't execute
//         console.log(preferences)
//     })
//     .catch(error => {
//         console.error(`Fail: ${error.type}`)
//     })

// Chaining Promises together
const getMusic = theme => {
    if (theme === 'dusk') {
        return Promise.resolve({
            album: 'music for airports',
        });
    }
    return Promise.resolve({
        album: 'kind of blue'
    });
}

// getUserPreferences()
// //   // .then(preference => {
// //   //     console.log(`preference is ${JSON.stringify(preference)}`) // Promises are objects that are going to return values in the future
// //   //     return getMusic(preference.theme)
// //   // })
// //   // .then(music => {
// //   //     console.log(music.album)
// //   // })
//   .then(preference => getMusic(preference.theme))
//   .then(music => { console.log(music.album) })
//   .catch(error => console.error(error)) // If you're chaining promises together, you don't need a catch() fpr each one. You can just add one at the end to handle any kind of rejection


  const getArtist = album => Promise.resolve({ artist: 'Brian Eno' })
  const failMusic = theme => Promise.reject({ type: 'Network error' })
  
//   getUserPreferences()
//     .then(preference => failMusic(preference.theme))
//     .then(music => getArtist(music.album))
//     .catch(e => console.log(e))

// Next tip: Creating Clean Functions with Async / Await
const getTheme = async () => {
    const { theme } = await getUserPreferences()
    return theme
}

// getTheme()
//     .then(theme => console.log(theme))

// Using async with multiple promises
const getArtistByPreference = async () => {
    const { theme } = await getUserPreferences(); // returns an object with a 'theme' key
    const { album } = await getMusic(theme);
    const { artist } = await getArtist(album)
    return artist;
}

// getArtistByPreference()
//     .then(response => console.log(response))
//     .catch(e => console.log(e))

// Handling Errors
// Make sure to add a .catch() at the end of all asynchronous method calls!

// The most common use case for using async/await and Promises is when you're fetching data from an API
// Next tip: Retreiving data with fetch()

// If all you're doing is requesting data, the fetch() call takes the URL as the single-argument
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(data => console.log(data))

// Handling the response body
// Will likely need to convert the body to json format!
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(data => data.json()) // Must remember this! Convert the response to json format so we can use it
//   .then(post => console.log(post.title)) // json() also returns a promise so we need another then() method to access the data

// Handling failed requests
// The fetch() promise will RESOLVE even if you get a failing status code, such as a 404 response. In other words, you can't rely on a catch() method to handle failed requests
// fetch('https://jsonplaceholder.typicode.com/pots/1')
//   .then(data => {
//     if (!data.ok) {
//       throw Error(data.status)
//     }
//     return data.json()
//     .then(post => console.log(post.title))
//     .catch(e => console.error(e))
//   })
fetch('https://jsonplaceholder.typicode.com/pots/1')
  .then((data) => {
    // if (!data.ok) {
    //   throw Error(data.status);
    // }
    return data.json();
  })
  .then((post) => {
    console.log(post.title);
  })
  .catch((e) => {
    console.log(e);
  });

// POST requests
// Used for adding new resources
// Because we're sending a POST request, we'll need to declare that
// We will also need to pass some JSON data to actually create the new resource
const update = {
  title: 'Clarence White Techniques',
  body: 'Amazing',
  userId: 1,
};
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(update)
};

// Getting a Promise returned
fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((data) => {
    if (!data.ok) {
      throw Error(data.status)
    }
    return data.json() //.json() returns a promise itself, so we need to add a 'then' to access the resolved data!
  })
  .then((update) => {
    console.log(update)
  })
  .catch((e) => {
    console.log(e)
  })

// Skipping last tip, but could check it out later - Maintaining State over time with localStorage
export { getArtistByPreference };