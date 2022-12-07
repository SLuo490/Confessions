import { Confession, Nav } from '../components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { auth, db } from '../utils/firebase';

export default function DetailsPage() {
  const location = useLocation();

  return (
    <div>
      <Nav />
      <h1>Hello</h1>
    </div>
  );
}
