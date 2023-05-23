import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import "./Styles.css"
export default function ActionAreaCard({ blogPosts }) {
  return (
    <div className="card-container">
      {blogPosts.length === 0 ? (
        <p>No results found</p>
      ) : (
        blogPosts.map((post, index) => (
            <Card sx={{ maxWidth: 345 }} key={index}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={post.img} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div" className="post-category">
                    {post.category}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" sx={{
                    fontFamily: 'Work Sans,SemiBold',
                    color: '#2F2F2F',
                    fontSize: '15px',
                    fontWeight: "bolder",
                    marginTop: '3vh',
                }}>
                    {post.title}
                  </Typography>
                  <p>
                    <CalendarTodayIcon sx={{ fontSize: 15, marginRight: 1 }} /> {post.date}
                  </p>
                  <p>
                    <Person2OutlinedIcon sx={{ fontSize: 15, marginRight: 1 }} /> {post.author}
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
      )}
    </div>
    
  );
}
