'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, this would send a password reset email
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitted(true);
    } catch (err) {
      setError('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="g-container py-12">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-soft p-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-serif font-medium text-primary">Grace & Carry</h1>
          </Link>
          <h2 className="text-2xl font-medium mt-6 mb-2">Forgot Your Password?</h2>
          <p className="text-neutral-600">Enter your email address to reset your password</p>
        </div>

        {error && (
          <div className="bg-error/10 text-error p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {isSubmitted ? (
          <div className="bg-success/10 text-success p-6 rounded-md mb-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium">Email Sent Successfully!</h3>
            </div>
            <p>
              We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                fullWidth
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending Reset Link...' : 'Send Reset Link'}
            </Button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
          <p className="text-neutral-600">
            Remember your password?{' '}
            <Link href="/auth/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}