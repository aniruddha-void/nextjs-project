import Link from "next/link";
export default function WebDevHome() {
  return (
    <div style={{ padding: '40px' }}>
      <h1> Web Development Services</h1>
      <ul>
       <Link href="/services/web-development/mern/">MERN</Link>
        <Link href="/services/web-development/mean/">MEAN</Link>
        <Link href="/services/web-development/dotnet">.NET</Link>
      </ul>
    </div>
  );
}
