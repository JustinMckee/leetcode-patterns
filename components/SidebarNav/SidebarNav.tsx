'use client';
import { useState } from 'react';
import {
	ChevronLeft,
	ChevronRight,
	ChevronDown,
	ChevronUp,
	Database,
	Layers,
	TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

const iconMap = {
	Database: Database,
	Layers: Layers,
	TrendingUp: TrendingUp,
};

export interface SidebarSection {
	label: string;
	items: { label: string; href: string }[];
	iconName?: keyof typeof iconMap;
}

export interface SidebarNavProps {
	navSections: ReadonlyArray<SidebarSection>;
}

export function SidebarNav({ navSections }: SidebarNavProps) {
	const [collapsed, setCollapsed] = useState(false);
	const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
		Object.fromEntries(navSections.map((s) => [s.label, true])),
	);

	const toggleSection = (label: string) => {
		setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
	};

	return (
		<aside
			className={`transition-all duration-200 bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 ${collapsed ? 'w-16' : 'w-64'} flex flex-col`}>
			<button
				className='p-2 focus:outline-none hover:bg-zinc-100 dark:hover:bg-zinc-800'
				onClick={() => setCollapsed((c) => !c)}
				aria-label='Toggle menu'>
				{collapsed ? (
					<ChevronRight className='w-5 h-5 text-zinc-500' />
				) : (
					<ChevronLeft className='w-5 h-5 text-zinc-500' />
				)}
			</button>
			<nav className='flex-1 overflow-y-auto'>
				<ul className='mt-2'>
					{navSections.map((section) => {
						const IconComponent = section.iconName
							? iconMap[section.iconName]
							: null;
						return (
							<li
								key={section.label}
								className='mb-2'>
								<button
									className='w-full flex items-center justify-between px-4 py-2 font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded focus:outline-none'
									onClick={() => !collapsed && toggleSection(section.label)}
									aria-expanded={openSections[section.label]}
									title={collapsed ? section.label : undefined}>
									<div className='flex items-center gap-2 truncate'>
										{IconComponent && (
											<IconComponent className='w-5 h-5 flex-shrink-0' />
										)}
										{!collapsed && (
											<span className='truncate text-left'>
												{section.label}
											</span>
										)}
									</div>
									{!collapsed &&
										(openSections[section.label] ? (
											<ChevronUp className='w-4 h-4 ml-2 flex-shrink-0' />
										) : (
											<ChevronDown className='w-4 h-4 ml-2 flex-shrink-0' />
										))}
								</button>
								{!collapsed && openSections[section.label] && (
									<ul className='pl-2 mt-1 space-y-1'>
										{section.items.map((cat) => (
											<li key={cat.href}>
												<Link
													href={cat.href}
													className='block px-4 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm truncate'>
													{cat.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
}
