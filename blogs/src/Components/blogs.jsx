import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import group from '../Assets/Group.png';
import './Styles.css';
import ActionAreaCard from './Card';
import blogData from '../data.json';
import FilterBar from './FilterBar';

export default function Blogs() {
  const blogPosts = blogData.blogPosts;
  const itemsPerPage = 6;

  // Filter state
  const [filterQuery, setFilterQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // Filtered and paginated blog posts
  const [filteredBlogPosts, setFilteredBlogPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Apply the filters and update the filtered blog posts
  useEffect(() => {
    let filteredPosts = blogPosts;

    if (filterQuery) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(filterQuery.toLowerCase()) ||
          post.author.toLowerCase().includes(filterQuery.toLowerCase())
      );
    }

    if (filterCategory) {
      filteredPosts = filteredPosts.filter(
        (post) => post.category === filterCategory
      );
    }

    setFilteredBlogPosts(filteredPosts);
    setTotalPages(Math.ceil(filteredPosts.length / itemsPerPage));
    setCurrentPage(1); // Reset current page to 1 when filters change
  }, [filterQuery, filterCategory]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle filter change
  const handleFilterChange = (query, category, date) => {
    setFilterQuery(query);
    setFilterCategory(category);
    setFilterDate(date);
  };

  // Get the paginated blog posts to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedBlogPosts = filteredBlogPosts.slice(startIndex, endIndex);

  return (
    <>
      <div className="container">
        <img src={group} alt="blog-img" />
        <div className="blogs-main">
          <h1>BLOGS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>
      <section className="blog-section">
        <h2>BLOGS</h2>
        <p>
          Located in Mumbai, Godrej Archives is the Godrej group's business
          archive. The Archives collects, preserves and manages records
          covering 121 years of the company's history. The idea was mooted in
          1997, the group's centenary year, by Mr. Sohrab Godrej, former
          chairman of the Godrej group
        </p>
        <FilterBar onFilterChange={handleFilterChange} categoryOptions={blogPosts}/>
        <ActionAreaCard blogPosts={displayedBlogPosts} />
        <br />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={handlePageChange}
        />
      </section>
      <div>
        <br />
      </div>
    </>
  );
}
