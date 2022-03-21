import { useState, useEffect } from 'react';

const useApi = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  console.log(data.data);
  return [data];
};

export default useApi;
