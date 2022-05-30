## [useContext](https://www.youtube.com/watch?v=lhMKvyLRWo0&t=7s)
* looks like the provider/subscriber pattern
* I guess it basically is the provider/subscriber pattern
* below example has three files:
    * _User_ Context, initializes the state, 
    * _User_ Provider, is some wrapper class that can potentially update the _User_
    * _User_ Subscriber, is a component that subscribes to the _User_ Provider

--- 

```typescriptreact
// UserContext.tsx
import { createContext, useContext } from 'react';

export interface User {
    name: "John";
    age: number;
}

export const UserContext = createContext<User | null>(null);
// User described later
```

--- 

```typescriptreact
// UserProvider.tsx
import { UserContext } from './UserContext';
import { useState } from 'react';

export const UserProvider = ({}) => {
  const [age, setAge] = useState(0);

  // useMemo is similiar to useEffect, and
  // will be called every time the state changes
  const providerValue = useMemo(() => ({
    age,
    setAge,
  }), [age, setAge]);

  return (
    <UserContext.Provider value={{ age, setAge }}>
       <Text>You are {age} years old</Text>
       <UserSubscriber />
    </UserContext.Provider>
  );
};
```

--- 

```typescriptreact
// UserSubscriber.tsx
import { UserContext } from './UserContext';

export default function UserSubscriber() {
    const { age, setAge } = useContext(UserContext);
    
    return (
        <View>
            <Text>{age}</Text>
            <button onClick={() => setAge(age + 1)}>+</button>
        </View>
    );
}

```


---
### Adding Complexity To The Example 
* would require us to change the _User_ to have multiple fields
* these fields could then be treated as a single __object__
* However, they would be retreived by destructuring the __object__

--- 
## React-Native Async Storage 

---

## REDUX TOOLKIT

--- 
3 essentials

* store to manage global app state
* slice to manage a app state for the screen
* component to render the UI

---
#### store.ts
Here we combine all the reducers specified by the individual slices and expose
them back to the components for the global app state.


---
#### types.ts



---
### 










---
#### OTHER OPTIONS
* (expo secure-store)[https://docs.expo.dev/versions/latest/sdk/securestore/]
* (react-native-keychain)[https://github.com/oblador/react-native-keychain]
* (react-native-sensitive-info)[https://github.com/mCodex/react-native-sensitive-info]
* (redux-persist-sensitive-storage)[https://github.com/CodingZeal/redux-persist-sensitive-storage]
    * this is probably the current redux implementation


___
###### DOCS
* (official docs)[https://redux-toolkit.js.org/tutorials/typescript]
    * (official video)[https://www.youtube.com/watch?v=9zySeP5vH9c&t=4s]
* (typescript website-demo)[https://medium.com/@killerchip0/react-native-redux-typescript-guide-f251db03428f]
* (youtube video)[https://www.youtube.com/watch?v=zKrS8m36phY]
* (redux demo in js)[https://github.com/gulsher7/Login_Signup]
