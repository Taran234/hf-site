import DynamicPage from "./_components/dynamic-page";
import { client } from "./lib/contentful";


export default async function Home() {
  // const res = await client.getEntries({ content_type: 'bloghf' });
  // const posts = res.items;

  // console.log(posts);

  return <DynamicPage keyword="Canada" />;
}
