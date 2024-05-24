import prisma from "@/app/utils/db";

async function getData(category: string, userId: string) {
  switch (category) {
    case "shows": {
      const data = await prisma.movie.findMany({
        where: {
          category: "show",
        },
        select: {
            age: true,
            duration: true,
            id: true,
            title: true,
            release: true,
            imageString: true,
            overview: true,
            youtubeString: true,
            WatchLists: {
                where: {
                    userId: userId,
                }
            }
        }
      });
    }
  }
}

export default function CategoryPage() {
  return <h1>Hello from the Category</h1>;
}
