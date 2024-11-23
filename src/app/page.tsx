import Image from "next/image";
import Herosection from "./components/Herosection";
import Featuredproduct from "./components/Featuredproduct";

export default function Home() {
  return (
<div>
  <Herosection />
  <Featuredproduct />
</div>
  );
}
