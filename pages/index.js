import Link from 'next/link';

function Index() {
  return (
    <div className="flex items-center justify-center">
      <Link href="/login">
        <span className="">
          Login
        </span>
      </Link>
    </div>
  );
}
export default Index;
