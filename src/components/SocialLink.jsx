import React from 'react';
import { Button } from "@/components/ui/button";

const SocialLink = ({ href, icon: Icon, label }) => {
  return (
    <Button
      variant="outline"
      className="w-full justify-start gap-2 mb-2"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="h-5 w-5" />
        {label}
      </a>
    </Button>
  );
};

export default SocialLink;