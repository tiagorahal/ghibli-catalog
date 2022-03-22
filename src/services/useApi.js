import { useState, useEffect } from 'react';

const useApi = (url, query = '') => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url + query)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useApi;
