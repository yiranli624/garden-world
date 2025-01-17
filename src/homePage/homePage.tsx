import styles from "./homePage.module.css";
import Image from "next/image";

export const HomePage = () => {
  return (
    <div>
      <nav
      // style={{
      //   width: "100%",
      //   height: "100%"
      //   position: "relative"
      // }}
      >
        <Image
          src='/assets/banner.png'
          // fill
          objectFit='contain'
          // sizes='100vw'
          width={1200}
          height={400}
          style={{ width: "100vw", height: "30vh" }}
          alt='picture of some vegitables'
        />
      </nav>
      <header>you are a header</header>
      <div>you are the main area</div>
    </div>
  );
};
