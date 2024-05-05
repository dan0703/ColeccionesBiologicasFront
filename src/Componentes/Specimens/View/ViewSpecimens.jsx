import React, { useEffect, useState } from 'react';
import { Portal } from '@mui/base/Portal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DataGrid, GridToolbarQuickFilter, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';

function MyCustomToolbar(props) {
  return (
    <React.Fragment>
      <Portal container={() => document.getElementById('filter-panel')}>
        <GridToolbarQuickFilter />
      </Portal>
      <GridToolbar {...props} />
    </React.Fragment>
  );
}

const VISIBLE_FIELDS = ['nombreCientifico', 'familia', 'nombreLocal', 'fechaColecta', 'nombreColector', 'protegido'];

// Mapeo de nombres de columna
const COLUMN_MAPPING = {
  nombreCientifico: 'Nombre Cientifico',
  protegido: 'Es Protegido',
  familia: 'Familia',
  nombreLocal: 'Nombre Local',
  fechaColecta: 'Fecha Colecta',
  nombreColector: 'Colector',
};

export default function ViewSpecimens() {
  const [specimens, setSpecimens] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5243/Ejemplar/GetEjemplarListForDataGrid')
      .then(response => {
        console.log(response.data);
        if (Array.isArray(response.data.$values)) {
          const specimensWithIds = response.data.$values.map((specimen, index) => ({
            ...specimen,
            id: index + 1, 
          }));
          setSpecimens(specimensWithIds); 
        } else {
          console.error('Error: El formato de datos recibidos no es el esperado.');
        }
      })
      .catch(error => {
        console.error('Error al obtener ejemplares:', error);
      });
  }, []);
  

  const columns = VISIBLE_FIELDS.map(field => {
    if (field === 'protegido') {
      return {
        field,
        headerName: COLUMN_MAPPING[field] || field, 
        flex: 1,
        renderCell: (params) => (
          params.value === 0 ? 
          <BlockIcon style={{ color: 'red' }} /> : 
          <CheckIcon style={{ color: 'green' }} />
        ),
      };
    } else {
      return {
        field,
        headerStyle: { textAlign: 'center' },
        cellStyle: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
        headerName: COLUMN_MAPPING[field] || field, 
        flex: 1,
      };
    }
  });

  return (
    <Grid container spacing={2} style={{ marginTop: '10px' }}>
      <Grid item>
        <Box id="filter-panel" />
      </Grid>
      <Grid item style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={specimens} 
          columns={columns}
          slots={{
            toolbar: MyCustomToolbar,
          }}
          initialState={{
            filter: {
              filterModel: {
                items: [],
                quickFilterExcludeHiddenColumns: true,
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
}
