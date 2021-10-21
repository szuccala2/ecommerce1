import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Fingerprint from '@mui/icons-material/Fingerprint';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState } from "react"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function ColorToggleButton(props) {
  const [alignment, setAlignment] = useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    props.toggle(event.target.value);
    props.updateAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="stock">Stock</ToggleButton>
      <ToggleButton value="outstock">Out of stock</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default function SearchAppBar(props) {
  const [text, setText] = useState("");
  const [alignment, setAlignment] = useState("all");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <IconButton aria-label="fingerprint" color="error">
              MUI<Fingerprint />
            </IconButton>
          </Typography>
          <ColorToggleButton toggle={props.toggle} updateAlignment={(alignment)=>{setAlignment(alignment)}} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={text}
              onChange={(e)=>{setText(e.target.value); props.cerca(e.target.value);}}
            />
            <IconButton aria-label="fingerprint" color="error"
              onClick={() => {setText(""); props.cerca("");}}>
              <RefreshIcon color='action' />
            </IconButton>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SvgIcon from '@mui/material/SvgIcon';
// import IconButton from '@mui/material/IconButton';

// function HomeIcon(props) {
//     return (
//         <IconButton aria-label="delete">
//             <SvgIcon {...props}>
//                 <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//             </SvgIcon>
//         </IconButton>
//     );
// }

// export default function Header() {
//   return (
//     <div>
//         <Box sx={{ height: 55, backgroundColor: 'primary.dark',}} >
//             <a href="#">
//                 <HomeIcon sx={{ fontSize: 40 }} />
//             </a>
//         </Box>
//       </div>
//   );
// }