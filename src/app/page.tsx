import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-2 leading-6">
      <h1 className="text-3xl font-semibold leading-10">React Playground</h1>
      <p>This is just a simple website where I try React stuff.</p>
      <h2>Things you can find:</h2>
      <ul className="list-disc list-inside">
        <li>
          <Link href={"/tree"} className="underline">
            Tree component example
          </Link>
        </li>
      </ul>
    </main>
  );
}
