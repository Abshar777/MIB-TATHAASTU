import React, { useEffect, useRef } from 'react';

interface SplitTextOptions {
  type: string;
  linesClass?: string;
  wordsClass?: string;
  charsClass?: string;
}

class CustomSplitText {
  element: HTMLElement;
  options: SplitTextOptions;
  words: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  originalHTML: string;

  constructor(element: HTMLElement | string, options: SplitTextOptions) {
    const selectedElement = typeof element === 'string' 
      ? document.querySelector(element) 
      : element;
    
    if (!selectedElement) {
      throw new Error('SplitText: Element not found');
    }

    this.element = selectedElement as HTMLElement;
    this.originalHTML = this.element.innerHTML;
    this.options = {
      type: options.type || 'words,chars',
      linesClass: options.linesClass || '',
      wordsClass: options.wordsClass || '',
      charsClass: options.charsClass || '',
    };
    
    this.split();
  }

  split() {
    const types = this.options.type.split(',').map(t => t.trim());
    
    // Reset
    this.element.innerHTML = this.originalHTML;
    this.words = [];
    this.chars = [];
    this.lines = [];
    
    // Split into words
    if (types.includes('words') || types.includes('chars')) {
      const textContent = this.element.textContent?.trim() || '';
      const words = textContent.split(/\s+/);
      
      this.element.innerHTML = '';
      
      words.forEach((word, i) => {
        if (!word) return;
        
        const wordSpan = document.createElement('span');
        wordSpan.className = `split-word ${this.options.wordsClass}`.trim();
        wordSpan.setAttribute('data-word-index', i.toString());
        
        if (types.includes('chars')) {
          [...word].forEach((char, j) => {
            const charSpan = document.createElement('span');
            charSpan.className = `split-char ${this.options.charsClass}`.trim();
            charSpan.setAttribute('data-char-index', this.chars.length.toString());
            charSpan.textContent = char;
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          });
        } else {
          wordSpan.textContent = word;
        }
        
        this.element.appendChild(wordSpan);
        this.words.push(wordSpan);
        
        if (i < words.length - 1) {
          this.element.appendChild(document.createTextNode(' '));
        }
      });
    }
    
    // Split into lines
    if (types.includes('lines')) {
      setTimeout(() => {
        const lineElements: Record<number, HTMLElement[]> = {};
        const wordElements = Array.from(this.element.querySelectorAll('.split-word')) as HTMLElement[];
        
        wordElements.forEach(word => {
          const rect = word.getBoundingClientRect();
          const top = Math.round(rect.top);
          
          if (!lineElements[top]) {
            lineElements[top] = [];
          }
          lineElements[top].push(word);
        });
        
        Object.keys(lineElements).map(Number).sort((a, b) => a - b).forEach((top, i) => {
          const wordsInLine = lineElements[top];
          const lineWrapper = document.createElement('div');
          lineWrapper.className = `split-line ${this.options.linesClass}`.trim();
          lineWrapper.setAttribute('data-line-index', i.toString());
          
          wordsInLine.forEach(word => lineWrapper.appendChild(word));
          
          this.element.appendChild(lineWrapper);
          this.lines.push(lineWrapper);
        });
      }, 0);
    }
  }

  revert() {
    this.element.innerHTML = this.originalHTML;
    return this;
  }
}

export default CustomSplitText;
