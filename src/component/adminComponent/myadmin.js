import React from "react";
import {Admin, Resource} from "react-admin";
import myAuthProvider from "../../myAuthProvider";
import {PostEdit, PostList} from "../../myPosts";
import {MyList, UserCreate, UserEdit} from "../../myUsers";
import jsonServerProvider from 'ra-data-json-server';


export const MyAdmin = () => {
    const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
    return (
        <Admin dataProvider={dataProvider} authProvider={myAuthProvider}>
            <Resource name="posts" list={PostList} edit={PostEdit}/> }
            <Resource name="users" list={MyList} edit={UserEdit} create={UserCreate}/>
        </Admin>
    )

}
