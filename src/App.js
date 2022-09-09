import { Routes, Route } from "react-router-dom";
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import { Box } from '@mui/material';

const App = () => {
  return (
    <div className="App">
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path="/video/:id" element={<VideoDetail/>}/>
            <Route path="/channel/:id" element={<ChannelDetail/>}/>
            <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
