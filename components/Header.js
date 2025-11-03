import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/logo.png" 
              alt="Vector Academy Logo" 
              width={80} 
              height={80}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
