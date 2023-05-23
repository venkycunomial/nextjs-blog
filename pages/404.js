import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found on Venky's Blog!</h1>
      <br />
      Click <Link href="/">here</Link> to go home!
    </>
  );
}
