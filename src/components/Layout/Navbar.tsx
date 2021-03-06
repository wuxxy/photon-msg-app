import {
  AppBar,
  Button,
  Toolbar
} from '@material-ui/core';
import React, {
} from 'react';
import {
  useResponsive
} from '../../modules/hooks/useResponsive';
import {
  useNavDrawer
} from '../../modules/contexts/Drawer';
import {
  useAuthenticated
} from '../../modules/contexts/Authentication';
import {
  useMediaQuery
} from '@chakra-ui/media-query';
const Navbar = () => {
  let query = useResponsive()
  let {
      open
  } = useNavDrawer()

  const {
      authenticated
  } = useAuthenticated()
  console.log(query);

  return (
    <AppBar style={{background: '#f2636d'}} color="primary" className="_nav" classes={{colorPrimary:'flex-1 bg-brand bg-opacity-25', root: 'bg-opacity-25 bg-brand flex flex-row flex-wrap justify-start flex-1 px-4 py-2 m-auto text-gray-100 shadow-sm flex-0'}} position="static" elevation={1}>
      <Toolbar className="flex flex-row bg-brand">
        <div className="w-full justify-self-start flex-0">
          <h1 className="items-center flex-1 p-4 text-2xl font-semibold text-center md:items-start md:text-left md:p-auto">Photon</h1>
        </div>
        <div className="flex flex-row self-center flex-1 w-full justify-self-end">
    
          {/* {/* <div className="flex flex-row items-center self-center justify-center flex-1 gap-4 text-base font-medium text-center text-gray-200 justify-self-end"> */}
            {/* <Link href="/privacy">
              <span className="self-center text-center hover:underline hover:cursor-pointer">
                Privacy
              </span>
            </Link>
            <Link href="/faq">
              <span className="self-center text-center hover:underline hover:cursor-pointer">
                FAQ
              </span>
            </Link> */}
            {/* <Link href="/downloads">
              <span className="self-center text-center hover:underline hover:cursor-pointer">
                Downloads
              </span>
            </Link> */} 

          {/* </div> */}
          {
            authenticated ? (
              <Button variant="outlined" color="secondary">
                Open Photon
              </Button>
            ) : (
              <Button href="/login" variant="outlined" color="secondary">
                Login
              </Button>
            )
          }
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;