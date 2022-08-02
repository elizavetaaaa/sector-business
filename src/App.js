import React, { useState, useEffect } from 'react'
import Records from './components/Records';
import Pagination from './components/Pagination';
import posts from '../src/db/posts.json'
import '../src/assets/styles/style.css'
import Search from "./components/Search";
import {useSelector} from "react-redux";

function App() {
    const posts = useSelector(state=>state.postsReducer.data)


    // To hold the actual data
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);


  useEffect(() => {
    setData(posts);

  }, []);

  useEffect(() => {
    setData(posts);

  }, [posts]);



  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)

  return (
      <div className='container mt-5'>
          <Search/>
        <Records data={currentRecords}/>
        <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
      </div>
  );
}

export default App;
