'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';

const UploadButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={v => {
				if (!v) setIsOpen(v);
			}}>
			<DialogTrigger onClick={() => setIsOpen(true)} asChild>
				<Button>Upload PDF</Button>
			</DialogTrigger>

			<DialogContent>
				<h1>Upload PDF</h1>
			</DialogContent>
		</Dialog>
	);
};
export default UploadButton;
