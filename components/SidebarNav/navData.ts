import type { NavCategory } from '../types';

export const navSections = [
	{
		label: 'Data Structures',
		iconName: 'Database' as const,
		items: [
			{ label: 'Arrays & Strings', href: '/data-structures/arrays-strings' },
			{ label: 'Linked Lists', href: '/data-structures/linked-lists' },
			{ label: 'Trees & Graphs', href: '/data-structures/trees-graphs' },
			{ label: 'Stacks & Queues', href: '/data-structures/stacks-queues' },
			{ label: 'Heaps', href: '/data-structures/heaps' },
			{
				label: 'Hash Tables & Maps',
				href: '/data-structures/hash-tables-maps',
			},
		] as NavCategory[],
	},
	{
		label: 'Patterns',
		iconName: 'Layers' as const,
		items: [
			{ label: 'Dynamic Programming', href: '/patterns/dynamic-programming' },
			{ label: 'Binary Search', href: '/patterns/binary-search' },
			{ label: 'Sliding Window', href: '/patterns/sliding-window' },
			{ label: 'Two Pointers', href: '/patterns/two-pointers' },
			{
				label: 'Backtracking & Recursion',
				href: '/patterns/backtracking-recursion',
			},
			{ label: 'Graph Traversals', href: '/patterns/graph-traversals' },
			{ label: 'Bit Manipulation', href: '/patterns/bit-manipulation' },
			{ label: 'Interval Problems', href: '/patterns/interval-problems' },
		] as NavCategory[],
	},
	{
		label: 'Complexity',
		iconName: 'TrendingUp' as const,
		items: [
			{ label: 'Easy', href: '/complexity/easy' },
			{ label: 'Medium', href: '/complexity/medium' },
			{ label: 'Hard', href: '/complexity/hard' },
		] as NavCategory[],
	},
] as const;
