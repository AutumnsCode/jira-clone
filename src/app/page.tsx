import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div>
			<Button variant='teritary' disabled>Click me</Button>
			<p className='font-bold text-red-600'>Help</p>
		</div>
	);
}
