import React, { useState } from 'react';
import Pagination from './Pagination';
import group from "../Assets/Group.png"
import "./Styles.css"
import ActionAreaCard from './Card';
import blogData from "../data.json";
// import Pagination from '@mui/material/Pagination';
export default function Blogs() {
    const blogPosts = blogData.blogPosts;
    const itemsPerPage = 6;
    const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
  
    const [currentPage, setCurrentPage] = useState(1);
  
    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    // Get the blog posts to display for the current page
    const displayedBlogPosts = blogPosts.slice(startIndex, endIndex);
  
    // Handle page change
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
   return (
   <>
   <div className="container">
  <img src={group} alt="blog-img" />
  <div className="blogs-main">
    <h1>BLOGS</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
  </div>
</div>
    <section className='blog-section'>
        <h2>BLOGS</h2>
        <p>Located in Mumbai, Godrej Archives is the Godrej group's business archive. The Archives collects, preserves and manages records covering 121 years of the company's history. The idea was mooted in 1997, the group's centenary year, by Mr. Sohrab Godrej, former chairman of the Godrej group</p>
        <ActionAreaCard blogPosts={displayedBlogPosts}/>
        <br/>
        <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handlePageChange} />
        </section>
    <div>
       <br/>
    </div>
   </>
  );
}
