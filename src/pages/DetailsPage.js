import { Confession, Nav } from '../components';
import { useEffect, useState, useLocation } from 'react';
import { auth, db } from '../utils/firebase';

export default function DetailsPage() {
  return (
    <div>
      <Nav />
      <h1>Hello</h1>
    </div>
  );
}
