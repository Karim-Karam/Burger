import Image from "next/image";
import styles from "./page.module.css";
import DrawerAppBar from "../../component/drawerAppBar";
import OrderNowDiv from "../../component/orderNowDiv";
import SecondSection from "../../component/secondSection";
import Yellowdiv from "../../component/yellowdiv";
import Mobilediv from "../../component/mobilediv";
import Reddiv from "../../component/reddiv";
import Knifediv from "../../component/knifediv";
import Lastdiv from "../../component/lastdiv";

export default function Home() {
  return (
    <>
      <DrawerAppBar />
      <OrderNowDiv />
      <SecondSection />
      <Yellowdiv />
      <Mobilediv />
      <Reddiv />
      <Knifediv />
      <Lastdiv />
    </>
  );
}
