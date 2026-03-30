'use client';

import GlassMorphismAuth from '@/components/GlassMorphismAuth';

export default function LoginPage() {
  const handleSignIn = (formData: any) => {
    console.log('Sign In data:', formData);
    // Handle sign in API call here
  };

  return <GlassMorphismAuth mode="signin" onSubmit={handleSignIn} />;
}
