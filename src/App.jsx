import React from 'react';
import Headers from './components/Headers/Headers';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Users from './pages/Users/Users';
import UserDetails from './pages/UserDetails/UserDetails';
import UserPosts from './pages/UserPosts/UserPosts';
import Error from './pages/Error/Error';

export default function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />}>
          <Route path="posts" element={<UserPosts />} />
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}
