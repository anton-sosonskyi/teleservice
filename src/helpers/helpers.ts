import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#198d99",
    },
  },
});

export const getCreationTime = () => {
  const date = new Date();
  const dateStr = date.toLocaleDateString();
  const timeStr = date.toLocaleTimeString('it-IT').slice(0, -3);

  return `${dateStr} ${timeStr}`;
}