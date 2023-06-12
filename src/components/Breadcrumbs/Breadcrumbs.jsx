import { Breadcrumb, Typography } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

const _defaultGetTextGenerator = (param, query) => null;
const _defaultGetDefaultTextGenerator = path => path;

const generatePathParts = pathStr => {
  const pathWithoutQuery = pathStr.split("?")[0];
  return pathWithoutQuery.split("/")
                         .filter(v => v.length > 0);
}

export default function NextBreadcrumbs({
  getTextGenerator=_defaultGetTextGenerator,
  getDefaultTextGenerator=_defaultGetDefaultTextGenerator
}) {
  const router = useRouter();

  const breadcrumbs = useMemo(function generateBreadcrumbs() {
    const asPathNestedRoutes = generatePathParts(router.asPath);
    const pathnameNestedRoutes = generatePathParts(router.pathname);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const param = pathnameNestedRoutes[idx].replace("[", "").replace("]", "");

      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      return {
        href, textGenerator: getTextGenerator(param, router.query),
        text: getDefaultTextGenerator(subpath, href)
      }; 
    })

    return [{ href: "/", text: "Home" }, ...crumblist];
  }, [router.asPath, router.pathname, router.query, getTextGenerator, getDefaultTextGenerator]);

  return (
    <Breadcrumb aria-label="breadcrumb">
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </Breadcrumb>
  );
}


function Crumb({ text: defaultText, textGenerator, href, last=false }) {

  const [text, setText] = React.useState(defaultText);

  useEffect(async () => {
    if (!Boolean(textGenerator)) { return; }
    const finalText = await textGenerator();
    setText(finalText);
  }, [textGenerator]);

  if (last) {
    return <Typography color="text.primary">{text}</Typography>
  }

  return (
    <Link underline="hover" color="inherit" href={href}>
      {text}
    </Link>
  );
}