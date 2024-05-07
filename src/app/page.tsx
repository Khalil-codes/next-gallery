import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "~/components/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <p className="text-center text-2xl font-bold">Please Sign In</p>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
