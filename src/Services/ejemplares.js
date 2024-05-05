import axios from 'axios';

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts" 
 });

useEffect(() => {
    client.get('?_limit=10').then((response) => {
       setPosts(response.data);
    });
 }, []);
