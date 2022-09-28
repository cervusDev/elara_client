export const mountUrl = (url: string, record: Record<string, any>) => {
  const arr: Array<string> = [];
  const queryParams: Array<string> = [];

  Object.entries(record).forEach(([key, value]) => {
    const param = `${key}=${value}`;
    arr.push(param);
  });

  for (let index = 0; index < arr.length; index++) {
    if (index === 0) {
      queryParams.push(`?${arr[index]}`);
    }else {
      queryParams.push(arr[index]);
    }
  }
  return `${url}` + queryParams.join('&');
};
