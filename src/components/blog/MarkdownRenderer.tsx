'use client';

import type { Components } from 'react-markdown';
import type { MarkdownRendererProps } from '@/components/types/blog';

import React from 'react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const components: Partial<Components> = {
    h1: ({ ...props }) => (
      <h1 className="font-display text-n900 mt-8 mb-4 text-3xl font-bold" {...props} />
    ),
    h2: ({ ...props }) => (
      <h2 className="font-display text-n900 mt-6 mb-3 text-2xl font-bold" {...props} />
    ),
    h3: ({ ...props }) => <h3 className="text-n800 mt-5 mb-2 text-xl font-semibold" {...props} />,
    h4: ({ ...props }) => <h4 className="text-n800 mt-4 mb-2 text-lg font-semibold" {...props} />,
    p: ({ ...props }) => <p className="text-n700 mb-4 leading-relaxed" {...props} />,
    ul: ({ ...props }) => <ul className="my-4 list-none space-y-2" {...props} />,
    ol: ({ ...props }) => (
      <ol className="text-n700 my-4 list-inside list-decimal space-y-2" {...props} />
    ),
    li: ({ ...props }) => (
      <li className="text-n700 flex items-start gap-3" {...props}>
        <span className="text-mag-500 mt-1.5 shrink-0" aria-hidden="true">
          ▹
        </span>
        <span className="flex-1 leading-relaxed">{props.children}</span>
      </li>
    ),
    code: ({
      inline,
      className,
      children,
      ...props
    }: {
      inline?: boolean;
      className?: string;
      children?: React.ReactNode;
    } & React.HTMLAttributes<HTMLElement>) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';

      return !inline && language ? (
        <div className="my-6">
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            customStyle={{
              margin: 0,
              borderRadius: '0.5rem',
              background: '#0C0814',
              border: '1px solid rgba(180, 0, 217, 0.15)',
            }}
            PreTag="div"
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code
          className="border-n200 bg-canvas-sunken text-mag-600 rounded border px-1.5 py-0.5 font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      );
    },
    a: ({ ...props }) => (
      <a
        className="text-mag-500 hover:text-mag-400 underline underline-offset-2 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    strong: ({ ...props }) => <strong className="text-n900 font-semibold" {...props} />,
    em: ({ ...props }) => <em className="text-n800 italic" {...props} />,
    blockquote: ({ ...props }) => (
      <blockquote
        className="text-n700 bg-canvas-sunken border-mag-500 my-4 rounded-r border-l-4 py-2 pl-4 italic"
        {...props}
      />
    ),
    hr: ({ ...props }) => <hr className="border-n200 my-8" {...props} />,
    table: ({ ...props }) => (
      <div className="my-4 overflow-x-auto">
        <table className="border-n200 min-w-full border-collapse border" {...props} />
      </div>
    ),
    thead: ({ ...props }) => <thead className="bg-canvas-sunken" {...props} />,
    tbody: ({ ...props }) => <tbody {...props} />,
    tr: ({ ...props }) => <tr className="border-n200 border-b" {...props} />,
    th: ({ ...props }) => (
      <th className="border-n200 text-n900 border px-4 py-2 text-left font-semibold" {...props} />
    ),
    td: ({ ...props }) => <td className="border-n200 text-n700 border px-4 py-2" {...props} />,
  };

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
