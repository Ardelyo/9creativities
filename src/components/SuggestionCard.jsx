import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SuggestionCard = ({ title, content }) => {
  return (
    <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors cursor-pointer">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{content}</p>
      </CardContent>
    </Card>
  );
};

export default SuggestionCard;