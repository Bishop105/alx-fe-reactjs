// src/components/Profile.jsx
import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
        <Link to="user/1">User Profile 1</Link>
        <Link to="user/2">User Profile 2</Link>
      </nav>
      <Outlet />
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="user/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

const UserProfile = () => {
  const { userId } = useParams();
  return <h2>User Profile for ID: {userId}</h2>;
};

export default Profile;
