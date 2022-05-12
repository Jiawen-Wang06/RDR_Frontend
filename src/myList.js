import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    UrlField,
    ReferenceField,
    ReferenceManyField,
    SingleFieldList,
    ChipField
} from 'react-admin';

export const MyList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">

                <TextField source="id" />

                {/* <ReferenceManyField lable="posts" reference="posts" source="id" target="userId">
                    <SingleFieldList>
                        <ChipField source="title" />
                    </SingleFieldList>
                </ReferenceManyField> */}

                <TextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="address" />
                <TextField source="phone" />
            </Datagrid>
        </List>
    );
}