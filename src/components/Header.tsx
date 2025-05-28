'use client';

import Link from 'next/link';
import { UserButton, SignInButton, SignUpButton, useUser } from '@clerk/nextjs';

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="w-full bg-gray-100 p-4 flex justify-between items-center shadow">
      <Link href="/" className="text-xl font-bold">
        Tokudev: Code Your Life
      </Link>

      <div className="flex gap-4 items-center">
        {isSignedIn ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <UserButton afterSignOutUrl="/marketing" />
          </>
        ) : (
          <>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
            </SignInButton>
            
          </>
        )}
      </div>
    </header>
  );
}
