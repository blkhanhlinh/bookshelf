import DesktopLayout from "@/components/Layout/DesktopLayout"
import { useRouter } from "next/router"
import { BookGrid } from "@/components/Books";
import { getBooksFromAPI } from "@/api";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Spacer } from "@chakra-ui/react";
import FilterSidebar from "@/components/Filter/FilterSidebar";

export async function getServerSideProps() {
    const books = await getBooksFromAPI();
    return books;
}

export default function AllCategories ({ books }) {
    const router = useRouter();

    return (
        <DesktopLayout isHomepage={false}>
            <Breadcrumb pt="4">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage className="text-primary-main">
                    <BreadcrumbLink>All Categories</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
			<Flex minW="max-content">
                <FilterSidebar />
                <Spacer />
                <BookGrid books={books} />
            </Flex>
        </DesktopLayout>
    )
}