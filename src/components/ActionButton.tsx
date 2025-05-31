import React from 'react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  children: React.ReactNode;
  variant: 'download' | 'share' | 'play';
  onClick?: () => void;
}

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v13m0 0l-4-4m4 4l4-4M5 17v2a2 2 0 002 2h10a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

export const ActionButton: React.FC<ActionButtonProps> = ({ children, variant, onClick }) => {
  const getIcon = () => {
    switch (variant) {
      case 'download':
        return <DownloadIcon />;
      case 'share':
        return <ShareIcon />;
      case 'play':
        return <PlayIcon />;
    }
  };

  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200",
        variant === 'download' && "bg-gray-600 hover:bg-gray-700 text-white",
        variant === 'share' && "bg-gray-800 hover:bg-gray-900 text-white",
        variant === 'play' && "bg-orange-500 hover:bg-orange-600 text-white"
      )}
      onClick={onClick}
    >
      {getIcon()}
      {children}
    </button>
  );
};