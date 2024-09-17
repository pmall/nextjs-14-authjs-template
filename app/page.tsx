import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>
        <Link href="/signup">Signup</Link>
      </p>
      <p>
        <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
