'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function HomePage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    setRedirecting(true);

    if (user) {
      router.replace('/dashboard');
    } else {
      router.replace('/marketing');
    }
  }, [isLoaded, user, router]);

  return (
    <main className="p-8">
      <p className="text-center text-lg">
        {redirecting ? 'Redirecting...' : 'Preparing session...'}
      </p>
    </main>
  );
}
