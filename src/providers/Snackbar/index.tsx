/* eslint-disable import/no-unresolved */
import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import { SnackbarProvider as Provider, SnackbarAction } from 'notistack';

interface IProps {
  children: React.ReactNode;
}
const useStyles = makeStyles({
  root: {
    zIndex: '99999999999999999! important' as any,
  },
});
// eslint-disable-next-line
export const SnackbarProvider = ({ children }: IProps) => {
  const ref = React.createRef<Provider>();

  const handleClick = (key: any) => () => {
    ref.current?.closeSnackbar(key);
  };

  const iconVariant = {
    error: '',
    success: '',
    warning: '',
    info: '',
  };

  const action = (key: SnackbarAction) => (
    <Button
      sx={{
        minWidth: '24px',
        borderRadius: '50%',
      }}
      color="inherit"
      onClick={handleClick(key)}
    >
      <CancelIcon />
    </Button>
  );
  const classes = useStyles();
  return (
    <Provider
      ref={ref}
      maxSnack={3}
      action={action}
      preventDuplicate
      classes={{
        containerRoot: classes.root,
      }}
      iconVariant={iconVariant}
    >
      {children}
    </Provider>
  );
};
