import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/410.svg"
        alt="svg"
        priority
        width={150}
        height={150}
      />
      <Image
        width={350}
        height={350}
        priority
        unoptimized
        src="https://placehold.co/600x400/EEE/31343C"
        alt="jpg"
      />
    </main>
  );
}
