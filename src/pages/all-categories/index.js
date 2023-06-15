import DesktopLayout from "@/components/Layout/DesktopLayout"
import { useRouter } from "next/router"
import { getBooksFromAPI } from "@/api";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Spacer } from "@chakra-ui/react";
import { connect } from "react-redux";
import DisplayBooks from "@/components/Layout/DisplayBooks";

export async function getServerSideProps() {
    const books = await getBooksFromAPI();
    return books;
}

const AllCategories = ({ books }) => {
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
			<DisplayBooks books={books} />
        </DesktopLayout>
    )
}

export default connect()(AllCategories);