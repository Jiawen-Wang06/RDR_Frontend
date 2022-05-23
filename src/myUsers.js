import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
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
                <EditButton />
            </Datagrid>
        </List>
    );
}

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />


            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput label="Email Address" source="email" type="email" />
            <TextInput source='address' />
            <TextInput source='phone' />
        </SimpleForm>
    </Edit>
);