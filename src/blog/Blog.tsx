import React, { useEffect, useState } from 'react';
import './../App.css'
import blogdata from '../../public/blog.json';
import SingleBlog from '../singleBlog/SingleBlog';



const Blog:React.FC =() => {
    type Blog ={
        id: number,
        title: string,
        cover: string,
        author: string
    }
    const [fakeDb,setFakeDb] = useState([]);
    
    useEffect(()=>{

        fetch('/public/blog.json').then(res=>res.json()).then(data=>setFakeDb(data))
    },[])
    return (
        <div className='container'>
            <div className='blog'>
            {fakeDb.map((blog)=> (<SingleBlog key={blog.id} blog={blog}></SingleBlog>)
            )}
            </div>
        </div>
    );
};

export default Blog;