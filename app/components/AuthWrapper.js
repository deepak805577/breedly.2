'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login'); // redirect if not logged in
    else setLoading(false);
  }, [router]);

  if (loading) return null; // or a spinner while checking
  return <>{children}</>;
}
