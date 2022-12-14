import React from 'react';
import Cookies from 'js-cookie';
import { TokenDecode } from './types';
import { useSnackbar } from 'notistack';
import { TOKEN_MESSAGE } from './error.message';
import { SubmitHandler } from 'react-hook-form';
import Router, { useRouter } from 'next/router';
import { parseJwt } from '@/utils/tokenDecoder';
import { auth, ErrorHandler as Err } from '@/service';
import { Login } from '@/service/endpoints/login/types';
import { usernameValidator } from '@/utils/validators/username';

interface IAuthContextProps {
  authenticated: boolean;
  handleLogin: () => void;
  tokenDecode: TokenDecode;
  handleLogout: () => void;
}

export const AuthContext = React.createContext({} as IAuthContextProps);

interface IProps {
  children: React.ReactNode;
}

const JWT_KEY = process.env.JWT_KEY as string;

export const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = React.useState(Boolean(Cookies.get(JWT_KEY)));
  const [tokenDecode, setTokenDecode] = React.useState<TokenDecode | null>(() => {
    const token = Cookies.get(JWT_KEY);
    if (token) {
      return parseJwt(token);
    }
    return null;
  });


  const { pathname } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin: SubmitHandler<Login> = React.useCallback(data => {
    const { status, message } = usernameValidator(data.username);

    if (!status) {
      enqueueSnackbar(message, { variant: 'error' });
      return;
    }

    auth.post(data).then(({ token }) => {
      if (!token) {
        enqueueSnackbar(TOKEN_MESSAGE.UNDEFINED, { variant: 'error' });
        return;
      }
      setAuthenticated(true);

      Cookies.set(JWT_KEY, token, { expires: 1, sameSite: 'lax' });

      const decode = parseJwt<TokenDecode>(token);
      setTokenDecode(decode);

      Router.push('/dashboard');
    }).catch(({ response }: Err) => {
      const { data: { message } } = response;
      enqueueSnackbar(message, { variant: 'error' });
    });
  }, [enqueueSnackbar]);

  const handleLogout = () => {
    Cookies.remove(JWT_KEY);
    if (pathname !== '/' && authenticated) {
      Router.push('/');
    }
    setAuthenticated(false);
  };

  const value = {
    tokenDecode,
    handleLogin,
    handleLogout,
    authenticated,
  } as IAuthContextProps;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
