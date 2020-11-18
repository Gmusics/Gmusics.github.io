export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState([]);

  const getFiles = useCallback(async () => {
    const response = await fetch(url);
    const files = await response.json();
    setfiles(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getFiles();
  }, [url, getFiles]);
  return { loading, files };
};
