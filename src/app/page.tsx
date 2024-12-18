"use client"; 
import Image from "next/image";
import React, { useState, ChangeEvent } from "react"; 
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; 
import { Textarea } from "@/components/ui/textarea"; 
import { Button } from "@/components/ui/button"; 


export default function WordCounter() {
 
  const [text, setText] = useState<string>("");

  // Function to handle text input changes
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  // Function to clear the input text
  const clearText = () => {
    setText("");
  };

  // Calculate word count
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  // Calculate character count
  const charCount = text.length;

return (
  <div className="relative w-full min-h-screen">
    {/* Background Image */}
    <Image
      src="/img.jpg"
      alt="my-pic"
      width={1400}
      height={2000}
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    />

    {/* Word Counter UI */}
    <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
      <Card className="w-full max-w-lg bg-white/90 backdrop-blur-md shadow-lg p-6 sm:p-8">
        <CardHeader className="text-center justify-center flex flex-col">
          <CardTitle className="text-lg sm:text-xl">Text Analysis</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Enter text and see the word and character count.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Textarea for input text */}
          <Textarea
            id="text-input"
            placeholder="Enter your text here..."
            className="h-32 sm:h-40 resize-none text-sm sm:text-base"
            value={text}
            onChange={handleTextChange}
          />
          {/* Display word and character count */}
          <div className="flex items-center justify-between">
            <div className="text-xs sm:text-sm text-muted-foreground">
              <span id="word-count">{wordCount}</span> words,{" "}
              <span id="char-count">{charCount}</span> characters
            </div>
            {/* Button to clear the input text */}
            <Button className="text-sm sm:text-base" onClick={clearText}>
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);
}