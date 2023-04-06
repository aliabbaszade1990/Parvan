// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createTheme } from '@mui/material/styles';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { IconButton, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavBar } from '@parvan/shared/nav-bar';

const theme = createTheme({
  direction: 'rtl',
  typography: { fontFamily: 'IRANSans' },
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          ></IconButton>
          <Typography variant="h6" noWrap component="div">
            مدیریت اشخاص
          </Typography>
        </Toolbar>
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
