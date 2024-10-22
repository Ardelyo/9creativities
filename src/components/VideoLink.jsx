import React from 'react';
import { Youtube } from 'lucide-react';

const VideoLink = ({ url, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-2 bg-white rounded-lg shadow hover:bg-gray-100 transition-colors"
    >
      <Youtube className="w-6 h-6 mr-2 text-red-600" />
      <span className="text-sm text-gray-700">{title}</span>
    </a>
  );
};

export default VideoLink;