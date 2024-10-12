import { cn } from '@/lib/utils';
import { DottedSeparatorProps } from '@/types';
import React from 'react';

export const DottedSeparator = ({
	className,
	color = '#d4d4d8',
	height = '2px',
	dotSize = '2px',
	gapSize = '6px',
	direction = 'horizontal',
}: DottedSeparatorProps) => {
	const isHorizontal = direction === 'horizontal';

	const extractNumericValue = (value: string) =>
		parseInt(value.replace('px', ''), 10);

	const dotSizeValue = extractNumericValue(dotSize);
	const gapSizeValue = extractNumericValue(gapSize);

	return (
		<div
			className={cn(
				isHorizontal
					? 'w-full flex items-center'
					: 'h-full flex flex-col items-center',
				className
			)}
		>
			<div
				className={isHorizontal ? 'flex-grow' : 'flex-grow-0'}
				style={{
					width: isHorizontal ? '100%' : height,
					height: isHorizontal ? height : '100%',
					backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
					backgroundSize: isHorizontal
						? `${dotSizeValue + gapSizeValue}px ${height}`
						: `${height} ${dotSizeValue + gapSizeValue}px`,
					backgroundRepeat: isHorizontal ? 'repeat-x': 'repeat-y',
					backgroundPosition: 'center',
				}}
			/>
		</div>
	);
};
