import Link from "next/link";
import Image from "next/image";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  session: any; // Replace `any` with your actual session type if available
}

const Header = ({ session }: HeaderProps) => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        {/* Example: Show username if session exists */}
        {session?.user?.name && <li>Welcome, {session.user.name}</li>}

        <li>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
            className="mb-10"
          >
            <Button>Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
