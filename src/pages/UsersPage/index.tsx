import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { actionCreators } from '../../store/reducers/action-creators';
import ModalUserCreate from '../../components/ModalUserCreate';
import ModalUserDelete from '../../components/ModalUserDelete';
import { apiRequests } from '../../apiRequests';

const SX_BOX = { width: '100%' };

let columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', sortable: false, width: 150 },
  { field: 'surname', headerName: 'Surname', sortable: false, width: 200 },
  { field: 'desc', headerName: 'Description', sortable: false, flex: 1 },
  { field: 'edit', headerName: '', sortable: false, minWidth: 120 },
];

const UsersPage: FC = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);

  const handleDelete = useCallback((id: number) => {
    setUserId(id);
    handleOpenModalDelete();
  }, []);

  const handleNavigate = useCallback(
    (id: number) => {
      navigate(`/user/${id}`);
    },
    [navigate]
  );

  columns = useMemo(() => {
    columns.map((col: GridColDef) => {
      if (col.field === 'edit') {
        col.renderCell = cellValues => {
          return (
            <>
              <Button
                variant='outlined'
                onClick={() => handleNavigate(Number(cellValues.id))}
              >
                Edit
              </Button>
              <IconButton onClick={() => handleDelete(Number(cellValues.id))}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        };
      }
      return col;
    });
    return columns;
  }, []);

  const { users } = useTypedSelector(state => state.users);

  const rows = users.map(el => ({ ...el, id: el.user_id }));

  const dispatch = useTypedDispatch();

  const handleCloseModalDelete = () => {
    setOpenModal(false);
  };

  const handleOpenModalDelete = () => {
    setOpenModal(true);
  };

  const handleUserDelete = useCallback(() => {
    if (userId) {
      apiRequests
        .deleteUserFromApi(userId)
        .then(res => dispatch(actionCreators.fethUsers()));
      handleCloseModalDelete();
    }
  }, [userId]);

  useEffect(() => {
    dispatch(actionCreators.fethUsers());
  }, []);

  return (
    <Box sx={SX_BOX}>
      <ModalUserCreate />
      <ModalUserDelete
        open={openModal}
        handleClose={handleCloseModalDelete}
        handleUserDelete={handleUserDelete}
      />

      <DataGrid
        autoHeight
        disableColumnMenu
        pageSize={5}
        rowsPerPageOptions={[5]}
        rows={rows}
        columns={columns}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default UsersPage;
