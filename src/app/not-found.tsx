import Link from 'next/link';
import Button from './components/Button/Button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-[#8892b0]">
      <h1 className="text-[#64ffda] text-9xl font-bold">404</h1>
      <h2 className="text-4xl mt-4 mb-8">Page Not Found</h2>
      <Link 
        href="/" 
      >
        <Button>GO Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;