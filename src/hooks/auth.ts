import React from 'react';
import { AuthContext } from '../context/auth';

export const useAuth = () => React.useContext(AuthContext);
