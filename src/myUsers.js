import React from 'react';
import {Create, Datagrid, Edit, EditButton, EmailField, List, SimpleForm, TextField, TextInput} from 'react-admin';

export const MyList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">

                <TextField source="id"/>

                {/* <ReferenceManyField lable="posts" reference="posts" source="id" target="userId">
                    <SingleFieldList>
                        <ChipField source="title" />
                    </SingleFieldList>
                </ReferenceManyField> */}

                <TextField source="name"/>
                <TextField source="username"/>
                <EmailField source="email"/>
                <TextField source="address"/>
                <TextField source="phone"/>
                <EditButton/>
            </Datagrid>
        </List>
    );
}

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id"/>


            <TextInput source="name"/>
            <TextInput source="username"/>
            <TextInput label="Email Address" source="email" type="email"/>
            <TextInput source='address'/>
            <TextInput source='phone'/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="username"/>
            <TextInput label="Email Address" source="email" type="email"/>
            <TextInput source='address'/>
            <TextInput source='phone'/>
        </SimpleForm>
    </Create>
);