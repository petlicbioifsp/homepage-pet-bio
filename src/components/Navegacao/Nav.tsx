import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        {" "}
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        {" "}
        <Link href={"/teste"}>Teste</Link>
      </li>
      <li>
        {" "}
        <Link href={"/produtos"}>Produtos</Link>
      </li>
    </ul>
  );
}
