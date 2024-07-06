import Images from "@/app/_components/Images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <section className="grid grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-3 md:px-6">
      <Images />
    </section>
  );
}
