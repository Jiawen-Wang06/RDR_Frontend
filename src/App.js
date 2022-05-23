import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { MyList, UserEdit } from './myUsers';
import { PostEdit, PostList } from "./myPosts";
import myAuthProvider from "./myAuthProvider";

const dataProvider = jsonServerProvider('http://localhost:8080'); //   https://jsonplaceholder.typicode.com 

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={myAuthProvider}>
    {/* <Resource name="posts" list={PostList} edit={PostEdit} /> */}
    <Resource name="users" list={MyList} edit={UserEdit} />
  </Admin>);

console.log("DataProvider", dataProvider);
console.log("ListGuesser", ListGuesser);

export default App;