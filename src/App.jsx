import { Home } from "./pages/Home";
import { createTheme } from '@mui/material/styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import logo from './assets/img/logo.svg';



export default function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: '#ba000d',
        main: '#ff7961',
        dark: '#f44336',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
    return (
        <Card sx={{ minWidth: 175 }}>
            <CardMedia
                sx={{ height: 140,
                  width: 140,
                  backgroundColor: theme
                 }}
                image={logo} // Usa el logo importado
                alt="logo de Batabit"
                title="BataBit"
            />
            <CardContent>
                <Home />
            </CardContent>
        </Card>
    );
}
