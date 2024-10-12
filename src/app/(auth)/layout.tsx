'use client';import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { AuthLayoutProps } from '@/types';

const AuthLayout = ({ children }: AuthLayoutProps) => {
	const pathname = usePathname();
	
	const isSignin = pathname === '/sign-in';

	return (
		<main className='bg-neutral-100 min-h-screen'>
			<div className='mx-auto max-w-screen-2xl p-4'>
				<nav className='flex items-center justify-between'>
					<Image src='/logo.svg' alt='logo' width={152} height={56} />
					<Button variant='secondary' asChild>
						<Link
							href={isSignin ? '/sign-up' : '/sign-in'}
						>
							{isSignin ? 'Sign Up' : 'Login'}
						</Link>
					</Button>
				</nav>
				<div className='flex flex-col items-center justify-center pt-4 md:pt-14'>
					{children}
				</div>
			</div>
		</main>
	);
};

export default AuthLayout;
