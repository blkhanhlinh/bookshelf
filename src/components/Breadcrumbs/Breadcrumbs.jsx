import bookshelfColors from "@/styles/colors"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

const Breadcrumbs = ({ category }) => {
  return (
    <Breadcrumb className="pt-4">
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='/all-categories'>All Categories</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage color={bookshelfColors.primary.main}>
        <BreadcrumbLink>{category}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Breadcrumbs