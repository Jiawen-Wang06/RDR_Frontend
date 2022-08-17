import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./component/layoutComponent/layout";
import {Home} from "./component/homeComponent/home";
import {ViewResources} from "./component/viewDEIResroucesComponent/viewdeiresources";
import {KnowYourRights} from "./component/knowYourRightsComponent/knowyourrights";
import {CustomPlan} from "./component/customPlanComponent/customplan";
import {MyAdmin} from "./component/adminComponent/myadmin";
/*const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com'); //   https://localhost:8080*/

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="viewResources" element={<ViewResources/>}/>
                    <Route path="viewResources/knowYourRights" element={<KnowYourRights/>}/>
                    <Route path="BuildCustomPlan" element={<CustomPlan/>}/>
                </Route>
                <Route path="admin/" element={<MyAdmin/>}>
                    <Route path='*' element={<MyAdmin/>}/>

                </Route>

            </Routes>
        </BrowserRouter>
    )
}

/*const App = () => (
  <Admin dataProvider={dataProvider} authProvider={myAuthProvider}>
    {/!* <Resource name="posts" list={PostList} edit={PostEdit} /> *!/}
    <Resource name="users" list={MyList} edit={UserEdit} create={UserCreate} />
  </Admin>
);*/

/*
console.log("DataProvider", dataProvider);
console.log("ListGuesser", ListGuesser);*/

export default App;