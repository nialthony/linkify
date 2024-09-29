import React from 'react';
import Header from '../components/Header';
import SocialLink from '../components/SocialLink';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';

const Index = () => {
  const socialLinks = [
    { href: 'https://github.com/yourusername', icon: GithubIcon, label: 'GitHub' },
    { href: 'https://twitter.com/yourusername', icon: TwitterIcon, label: 'Twitter' },
    { href: 'https://linkedin.com/in/yourusername', icon: LinkedinIcon, label: 'LinkedIn' },
    { href: 'https://instagram.com/yourusername', icon: InstagramIcon, label: 'Instagram' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">My Social Links</h1>
        <div className="max-w-md mx-auto">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;