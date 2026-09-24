import { useEffect } from "react";
import { ScrollAnimation } from "../common/scrollAnims";
import { CursorAnimation } from "../common/cursor";
import { AnchorSscroll } from "../common/utilits";
import { CurrentPageLabel } from "../common/utilits";

import Footer from "./footers/Index";
import Header from "./headers/Index";
import Cursor from "./cursor/Index";
import ScrollbarProgress from "./scrollbar-progress/Index";
import EntranceIntro from "@components/EntranceIntro";

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  extraClass,
}) => {
  useEffect(() => {
    ScrollAnimation();
    CursorAnimation();
    AnchorSscroll();
    CurrentPageLabel();
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      <EntranceIntro />
      <Cursor />

      <ScrollbarProgress />

      {!noHeader && (
        <Header
          layout={header}
          extraclassName={extraClass}
        />
      )}

      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          {children}

          {!noFooter && <Footer layout={footer} />}          
        </div>
      </div>
    </div>
  );
};
export default Layouts;
