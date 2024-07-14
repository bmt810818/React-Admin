import { IfCanAccess } from '@react-admin/ra-rbac';
import { Toolbar, DeleteButton, EditButton } from 'react-admin';

const CompanyRecordToolbar = () => (
    <Toolbar>
        <IfCanAccess action="edit">
            <EditButton />
        </IfCanAccess>
        <IfCanAccess action="delete">
            <DeleteButton />
        </IfCanAccess>
    </Toolbar>
);