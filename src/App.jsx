import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { Button, CardActionArea, Container, TextField, Typography } from '@mui/material';


function App() {

  return (
    <Box sx={{ p: 0, m: 0, display: 'flex', backgroundColor: '#d3d3d3', height: '100vh', width: '100vw', alignItems: 'center' }}>
      {/*HEADER*/}
      <Stack sx={{ width: '100%' }}>
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5%', width: '50%' }}>
          {/* CONTAINER */}
          <Stack spacing={2} sx={{ width: '100%' }}>
            {/* AREA DE CADASTRO */}
            <Card sx={{ width: '100%', display: 'flex', flexDirection: "column", alignItems: "center" }}>
              <Typography sx={{
                marginTop: 2,
                fontSize: 20,
                font: 'Times New Roman'
              }}>
                Cadastrar Aluno
              </Typography>
              <CardContent sx={{ width: '60%' }} >
                <TextField id='standard-basic' label='Nome:' variant='standard' sx={{ width: "100%" }} />
              </CardContent>

              <CardContent sx={{ width: '60%' }} >
                <TextField id='standard-basic' label='Sobrenome:' variant='standard' sx={{ width: "100%" }} />
              </CardContent>

              <CardContent sx={{ width: '60%' }} >
                <TextField id='standard-basic' label='Data de Nascimento:' variant='standard' sx={{ width: "100%" }} />
              </CardContent>

              <CardContent sx={{ width: '60%' }} >
                <TextField id='standard-basic' label='CPF:' variant='standard' sx={{ width: "100%" }} />
              </CardContent>

              <CardContent sx={{ width: '60%' }} >
                <TextField disabled id='standard-basic' variant='standard' defaultValue='Ativo' sx={{ width: "100%" }} />
              </CardContent>
            </Card>
            <CardActionArea>
              <Button sx={{ width: '100%' }} variant='contained'>
                SALVAR
              </Button>
            </CardActionArea>
          </Stack>
        </Container>
      </Stack>
    </Box>

  );
};

export default App;
