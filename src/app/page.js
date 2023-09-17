import Image from "next/image";
import styles from "./page.module.css";
import DrawerAppBar from "../../component/drawerAppBar";
import OrderNowDiv from "../../component/orderNowDiv";
import SecondSection from "../../component/secondSection";

export default function Home() {
  return (
    <>
      <DrawerAppBar />
      <OrderNowDiv />
      <SecondSection />
    </>
  );
}
