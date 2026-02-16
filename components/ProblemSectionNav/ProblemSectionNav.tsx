import React from 'react';

const sections = [
  { label: 'Problem', anchor: '#problem' },
  { label: 'Pattern', anchor: '#pattern' },
  { label: 'Pseudocode', anchor: '#pseudocode' },
  { label: 'Code', anchor: '#code' },
];

export function ProblemSectionNav() {
  return (
    <nav className="w-full flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 sticky top-0 z-20">
      <ul className="flex gap-4 py-3">
        {sections.map((s) => (
          <li key={s.anchor}>
            <a href={s.anchor} className="text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:underline">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
