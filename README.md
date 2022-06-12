---
# Handicap_Application

PUSH TO MASTER

---
 * [working api with mongodb](https://golf-handicap-api-ts.herokuapp.com/)  
 * [repo](https://github.com/ndonfris/backend_api)  
 * app will be on __vercel__ by tomorrow  
 * I converted the backend to native mongodb instead of mongoose since your
     calls weren't async and would crash the rendering of the page (like during
     a search)  
     * most of the methods are the same name though  
     * also I provided a very documented class to wrap the mongodb connections,
       you'll find it pretty easy to use.  
 * Also if you notice the new api keys in the config dir, I think you'll be
     impressed with the feature I'm adding.  
 * if you click the working api link: `https://golf-handicap-api-ts.herokuapp.com/`
    with the blank endpoint, a page displaying 'hit' means that the server is
    running healthy.  

---

[ _PROJECT BOARD_ ](https://github.com/npatanjo/Handicap_Application/projects/1)

## TODO:

1. [hella apis](https://rapidapi.com/search/golf)
1. Define what frameworks are being used so we can begin generating a startup script
1. figma links:
   - [invite link](https://www.figma.com/file/cVglD4GCRkwcWVER1X9lAS/Handicap-Mockup?node-id=4%3A16)
   - [project link](https://www.figma.com/file/cVglD4GCRkwcWVER1X9lAS/Handicap-Mockup?node-id=0%3A1)
1. Define _schemas_ and _template_ for json responses _(example of json template and schemas)_

```json
{
    "status": "success",
    "respone code": "201",
    {
        "key": [
            {"schema for a course"},
            {"schema for a course"},
            {"schema for a course"},
            {"schema for a course"}
        ]
    }
}
```

---

### BASIC SEARCH FUNCTIONALITY

Heres how a basic component architecture should look.

| variable       | description                                         |
| -------------- | --------------------------------------------------- |
| results        | array of our golf courses found from backend search |
| searchFunction | call to backend api when the search is requested    |
| source         | ?                                                   |

```typescript
function Searchpage({}: Props) {
    const [results, setResults] = useState([] as GolfCourse[]);

    useEffect(() => {
       // some type of loading animation, because this will be called
       // any time searchFunciton is called to change the result list
    }, [results])

    const searchFunction = async () => {
        try {
            const results: GolfCourse[] = await backendCall();
            setResults(results);
        } catch (e) {
            // backend call error
        }
    }

    return (
        <SearchBar source={...} onPress={searchFunction} />
        <SearchResults results={results} />
    );

}
```

---

#### NATE TODO [ __NEW__ ]:
* finish RESTful API for the users
* make RESTful API for golf courses
---

#### NICK TODO [ __NEW__ ]: 
* [ __backend__ ] api call for nearby course ✖
* [ __frontend__ ] animation for loading nearby courses ✖
* [ __frontend__ ] clear userState, after login, and retrieve from localStorage ✖
* [ __backend__ ] call for login, that returns userState (and potentially stores right there) ✖
* [ __frontend__ ] saved screen and functionality that ( requires backend ) ✖
* Add filter to searchbar and implement results components ✔
* Finish Log-In API using rn-async storage (just need backend) ✔
* Fix error with search results using spread operator ✔
* Create union-type of context types for wrapping multiple components ✔
* Research reducer hook ✔
* Decomp Splash Screen to a have animation in external component ✔
* add filter to seachContext ✔

---
##### Resources:  

* [The Nerdy Canuck](https://www.youtube.com/channel/UCmG1UbEI0iFE1tAw2SyvvXg):  
    * [Restful API with NodeJS, Express & Typescript](https://www.youtube.com/watch?v=vyz47fUXcxU&t=1056s)  
* [Best React Native Documentation](https://www.reactnative.express/)  
* Old project incase you need it. [TS-Movie-List](https://www.github.com/ndonfris/ts-movie-list)  
* [Package Search](https://www.npmjs.com/)

---

##### Resources:

- [The Nerdy Canuck](https://www.youtube.com/channel/UCmG1UbEI0iFE1tAw2SyvvXg):
  - [Restful API with NodeJS, Express & Typescript](https://www.youtube.com/watch?v=vyz47fUXcxU&t=1056s)
- [Best React Native Documentation](https://www.reactnative.express/)
- Old project incase you need it. [TS-Movie-List](https://www.github.com/ndonfris/ts-movie-list)
- [Package Search](https://www.npmjs.com/)

---

##### Golf information (for Nick):

- The following link will tell you how golf handicaps are caculated. This way you know what we need from our users. [tuitorial](https://www.fastgolfer.com/how-to-calculate-golf-handicap/)
