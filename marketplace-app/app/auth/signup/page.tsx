'use client';

import GlassMorphismAuth from '@/components/GlassMorphismAuth';

export default function SignUpPage() {
  const handleSignUp = (formData: any) => {
    console.log('Sign Up data:', formData);
    // Handle sign up API call here
  };

  return <GlassMorphismAuth mode="signup" onSubmit={handleSignUp} />;
}
