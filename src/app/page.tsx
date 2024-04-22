import Image from "next/image";

const urls = [
  "https://utfs.io/f/059ecea5-ec4c-47b9-b43a-3896da5ab1a8-qoafgw.jpg",
  "https://utfs.io/f/50259597-5242-42e2-93c1-70e6cf18b08d-t6mj1h.jpg",
  "https://utfs.io/f/1ee07d52-d552-4a0c-847a-308c1abc898b-u7fics.jpg",
  "https://utfs.io/f/04174b21-1887-4737-a934-09552c6ec216-888g8o.jpg",
  "https://utfs.io/f/2e41b39b-312b-42a8-ab5b-72bffb925596-gmy5k5.jpg",
  "https://utfs.io/f/bc58872c-4d88-4c1e-82a5-cd0964191446-ok1un2.jpg",
  "https://utfs.io/f/328a5a93-7d38-484d-94ef-e9e2b46e5154-7tenuh.jpg",
  "https://utfs.io/f/3169f2d1-640e-4182-8647-a397b18cb169-8agb6h.jpg",
];

const data = urls.map((item, index) => ({ id: index + 1, url: item }));

export default function HomePage() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {data.map((item) => (
          <Image
            src={item.url}
            key={item.id}
            alt={`Image ${item.id}`}
            width={400}
            height={300}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        ))}
      </div>
    </main>
  );
}
