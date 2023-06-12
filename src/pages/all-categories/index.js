import DesktopLayout from "@/components/Layout/DesktopLayout"
import { useRouter } from "next/router"
import { BookGrid } from "@/components/Books";
import { getBooksFromAPI } from "@/api";

export async function getServerSideProps() {
    const books = await getBooksFromAPI();
    return books;
}

export default function AllCategories ({ books }) {
    const router = useRouter();

    return (
        <DesktopLayout>
			<BookGrid books={books}/>
        </DesktopLayout>
    )
}