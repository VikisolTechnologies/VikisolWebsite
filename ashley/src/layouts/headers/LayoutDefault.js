import Link from "next/link";
import { useState, useEffect } from "react";
import AppData from "@data/app.json";
import { useRouter } from 'next/router';
import BackToTop from "../back-to-top/Index";
import Pentagon from "@layouts/pentagon/Index";

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const navItems = [];

  const { asPath } = useRouter();

  AppData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if ( item.children != 0 ) {
      s_class1 = 'mil-has-children';
    }
    if ( ( asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) {
      s_class1 += ' mil-active';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
  });

  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();

    const lists = document.querySelectorAll('.mil-has-children ul');
    lists.forEach((list) => {
        list.classList.remove('mil-active');
    });

    const links = document.querySelectorAll('.mil-has-children a');
    links.forEach((link) => {
        link.classList.remove('mil-active');
    });

    e.target.classList.toggle('mil-active');
    e.target.parentNode.querySelector('ul').classList.toggle('mil-active');
  }

  useEffect(() => {
  if (window.innerWidth > 991) return;

  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowHeader(false); // hide when scrolling down
    } else {
      setShowHeader(true); // show when scrolling up
    }

    lastScrollY = window.scrollY;
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
    
    {/* menu */}
    <div className={`mil-menu-frame ${toggle ? "mil-active" : ""}`}>
        {/* frame clone */}
        <div className="mil-frame-top">
            <Link
                href={AppData.header.logo.link}
                className="mil-logo"
                >
                <img
                src={AppData.header.logo.symbol}
                alt="Vikisol"
                />
                </Link>
            <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => setToggle(!toggle)}>
                <span />
            </div>
        </div>
        {/* frame clone end */}
        <div className="container">
          <div className="mil-menu-content">
              <div className="row">
                  <div className="col-xl-5">

                      <nav className="mil-main-menu" id="swupMenu">
                        <ul>
                            {navItems.map((item, key) => (
                            <li className={item.classes} key={`header-menu-item-${key}`}>
                                <Link href={item.link} onClick={item.children != 0 ? (e) => clickedMobileMenuItemParent(e) : ""}>{item.label}</Link>
                                {item.children != 0 &&
                                <ul>
                                    {item.children.map((subitem, key2) => (
                                    <li key={`header-submenu${key}-item-${key2}`} className={ ( ( asPath.indexOf( subitem.link ) != -1 && subitem.link != '/' ) || asPath == subitem.link ) ? "mil-active" : "" }>
                                        <Link href={subitem.link}>{subitem.label}</Link>
                                    </li>
                                    ))}
                                </ul>
                                }
                            </li>
                            ))}
                        </ul>
                      </nav>

                  </div>
                  <div className="col-xl-7">

                      <div className="mil-menu-right-frame">
                          <div className="mil-animation-in">
                              <div className="mil-animation-frame">
                                  <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2">
                                    <Pentagon />
                                  </div>
                              </div>
                          </div>
                          <div className="mil-menu-right">
                              <div className="row">
                                  <div className="col-lg-8 mil-mb-60">

                                      <h6 className="mil-muted mil-mb-30">Our Solutions</h6>

                                      <ul className="mil-menu-list">
                                          <li><Link href="/services/sap-consulting" className="mil-light-soft">SAP Consulting</Link></li>
                                          <li><Link href="/services/software-engineering" className="mil-light-soft">Software Engineering</Link></li>
                                          <li><Link href="/services/ai-automation" className="mil-light-soft">AI & Automation</Link></li>
                                          <li><Link href="/services/cyber-security" className="mil-light-soft">Cyber Security</Link></li>
                                          <li><Link href="/services/cloud-devops" className="mil-light-soft">Cloud & DevOps</Link></li>
                                          <li><Link href="/services/talent-workforce" className="mil-light-soft">Talent & Workforce</Link></li>
                                      </ul>

                                  </div>
                                  <div className="col-lg-4 mil-mb-60">

                                      <h6 className="mil-muted mil-mb-30">Company</h6>

                                      <ul className="mil-menu-list">
                                          <li><Link href="/team" className="mil-light-soft">Leadership</Link></li>
                                          <li><Link href="/blog" className="mil-light-soft">Insights</Link></li>
                                          <li><Link href="/projects" className="mil-light-soft">Our Work</Link></li>
                                          <li><Link href="/contact" className="mil-light-soft">Contact Us</Link></li>
                                      </ul>

                                  </div>
                              </div>
                              <div className="mil-divider mil-mb-60"></div>
                              <div className="row justify-content-between">

                                  <div className="col-lg-4 mil-mb-60">

                                      <h6 className="mil-muted mil-mb-30">India</h6>

                                      <p className="mil-light-soft mil-up">Maximus Towers, Mindspace, Hyderabad <span className="mil-no-wrap">+91 9063615796</span></p>
                                                          <br/>
                                <p className="mil-light-soft mil-up">Meridian Towers 2nd and 3rd Floors, Kormangala, 2nd Block, Karnataka <span className="mil-no-wrap">+91 7989595796</span></p>


                                  </div>
                                  <div className="col-lg-4 mil-mb-60">

                                      <h6 className="mil-muted mil-mb-30">Global</h6>

                                      <p className="mil-light-soft">UAE · Saudi Arabia · Qatar · Oman · USA · UK · Australia <span className="mil-no-wrap">connect@vikisol.in</span></p>

                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
      </div>
      {/* menu */}
      
      {/* curtain */}
      <div className="mil-curtain" />
      {/* curtain end */}

      {/* frame */}
      <div className={`mil-frame ${showHeader ? "mil-show-header" : "mil-hide-header"}`}>
        <div className="mil-frame-top">
            <Link
                href={AppData.header.logo.link}
                className="mil-logo"
            >
                <img
                src={AppData.header.logo.symbol}
                alt="Vikisol"
                />
            </Link>

            <div
                className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
                onClick={() => setToggle(!toggle)}
            >
                <span />
            </div>
            </div>
        <div className="mil-frame-bottom">
            <div className="mil-current-page" />

            <BackToTop />
        </div>
      </div>
      {/* frame end */}
    </>
  );
};
export default DefaultHeader;
