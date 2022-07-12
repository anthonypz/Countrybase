# Countrybase
Search for any country and get interesting information back, including the country's capital, population, currency, languages spoken, weather, and more.

**Link to project:** https://countrybase.netlify.app/

<img src="https://i.ibb.co/YW8K0rT/Up-Mock.png" alt="app mockup" border="0" width=300 height=auto />

## How It's Made:

**Tech used:** React, Vite, Yarn, [Restcountries API](https://restcountries.com/), [Open weather API](https://openweathermap.org/api), Material UI, Netlify

On the tooling side, I decided to use [Vite](https://vitejs.dev/) as my build tool instead of [Create React App](https://create-react-app.dev/) and Yarn instead of NPM because of the speed improvements. From there, I chose the React template as my base to build out my app. Since Vite is very minimal, it did not include eslint by default, which is very useful for catching programming mistakes. So I installed and configured eslint, as well as create-react-app's eslint config package. From there, I pulled in data from two separate APIs: restcountries and open weather. The Open weather API required an API key for access, so I set up an `.env.local` file and accessed the environment variable on the front end to keep my app secured. Lastly, I used Netlify as my host and gave them access to my API keys so that my app would still work on their servers.

On the React side, I created reusable components for the restcountries and weather APIs. I decided to use a controlled component for the input. The countries data then gets filtered based on the input's state, passed down through props, and displayed as a separate component. The weather API gets called based on the filtered country's capital info. The final result is a component displaying country data from two different sources. This app uses Material UI's component library for the design, which is an awesome tool to work with. I simply styled the input box and buttons, wrapped the content in a card UI component, and gave the text a lift using the Roboto font with the Typography component.

I decided to try Material UI's component library for building out the app design. 

## Optimizations

The two biggest optimizations that I made were:
1. Using the useMemo hook to memoize the filter results and keeping render times under 2ms in most cases.
2. Debouncing the input box by using a custom hook when filtering through the country data. This added a 400ms delay to the input field so that re-renders wouldn't happen too frequently and also delayed the display of the results, preventing distractions while typing.

## Lessons Learned:

I learned how to use Vite, Yarn, and work with multiple APIs in one project. I also learned how to secure API keys using environment variables and utilize React hooks like useMemo and useDebounce. Along the way, I also learned about prop drilling and how to avoid it using solutions like useContext, or better yet, component composition when your app's structure becomes deeply nested.
