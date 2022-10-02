interface IReturn {
  status: boolean;
  message: string;
}

export function usernameValidator(username: string): IReturn {
  if (username.length < 4) {
    return {
      status: false,
      message: '4 characters minimum for username'
    };
  }

  if (username.length > 20) {
    return {
      status: false,
      message: 'maximum of 100 characters for the username',
    };
  }

  const usernameRegex = /^[\w&.-]+$/;
  const invalidChar = usernameRegex.test(username);

  if (!invalidChar) {
    return {
      status: false,
      message: 'username contains a invalid char'
    };
  }

  return {
    status: true,
    message: ''
  };
}
