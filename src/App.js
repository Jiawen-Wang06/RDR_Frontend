import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { MyList } from './myList';
import { PostEdit, PostList } from "./myPost";
import myAuthProvider from "./myAuthProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); //  http://localhost:8080

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={myAuthProvider}>
    {/* <Resource name="posts" list={PostList} edit={PostEdit} /> */}
    <Resource name="users" list={MyList} />
  </Admin>);

console.log("DataProvider", dataProvider);
console.log("ListGuesser", ListGuesser);

export default App;