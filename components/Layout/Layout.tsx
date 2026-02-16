import React, { ReactNode } from 'react';

import { navSections } from '../SidebarNav/navData';
import { SidebarNav } from '../SidebarNav';

export interface LayoutProps {
	children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<header className='fixed top-0 left-0 right-0 z-50 flex items-center h-16 px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black'>
				<div className='flex items-center gap-2'>
					<div className='w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded mr-2' />
					<span className='font-bold text-lg tracking-tight'>
						LeetCode Patterns
					</span>
				</div>
			</header>
			<div className='flex flex-1 pt-16'>
				<SidebarNav navSections={navSections} />
				<main className='flex-1 flex flex-col items-center bg-white dark:bg-black'>
					<div className='w-full max-w-[1280px] flex-1 flex flex-col px-4 py-8'>
						{children}
					</div>
				</main>
			</div>
			<footer className='h-12 flex items-center justify-center border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs text-zinc-500'>
				© Justin McKee, 2026. All rights reserved.
			</footer>
		</div>
	);
};
