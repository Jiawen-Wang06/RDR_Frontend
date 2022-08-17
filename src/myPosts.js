import * as React from "react";
import {
    Datagrid,
    Edit,
    EditButton,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
} from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField source="userId" reference="users" link={false}>
                <TextField source="name"/>
            </ReferenceField>

            <TextField source="title"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>

            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Edit>
);