import * as React from 'react';
import group from "../Assets/Group.png"
import "./Styles.css"
export default function Blogs() {
  return (
   <>
   <div class="container">
  <img src={group} alt="blog-img" />
  <div class="blogs-main">
    <h1>BLOGS</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
  </div>
</div>
    <section className='blog-section'>
        <h2>BLOGS</h2>
        <p>Located in Mumbai, Godrej Archives is the Godrej group's business archive. The Archives collects, preserves and manages records covering 121 years of the company's history. The idea was mooted in 1997, the group's centenary year, by Mr. Sohrab Godrej, former chairman of the Godrej group</p>
    </section>
   </>
  );
}
