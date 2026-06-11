import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const TeamData = [
    {
        "image": "/img/faces/1.jpg",
        "name": "Syam Prabhakar Seeli",
        "role": "Founder & CEO",
        "social": [
            {
                "link": "https://linkedin.com/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            }
        ]
    },
    {
        "image": "/img/faces/3.jpg",
        "name": "Jennifer Israel Seeli",
        "role": "Chief Technology Officer",
        "social": [
            {
                "link": "https://linkedin.com/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            }
        ]
    },
    {
        "image": "/img/faces/2.jpg",
        "name": "Arjun Reddy",
        "role": "Head of SAP Practice",
        "social": [
            {
                "link": "https://linkedin.com/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            }
        ]
    },
    {
        "image": "/img/faces/4.jpg",
        "name": "Priya Mehta",
        "role": "Head of Talent Solutions",
        "social": [
            {
                "link": "https://linkedin.com/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            }
        ]
    },
    {
        "image": "/img/faces/5.jpg",
        "name": "Rahul Verma",
        "role": "Head of Cloud & DevOps",
        "social": [
            {
                "link": "https://linkedin.com/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            }
        ]
    },
    {
        "image": "/img/faces/6.jpg",
        "name": "Kiran Patel",
        "role": "Head of Software Engineering",
        "social": [
            {
                "link": "https://linkedin.com/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            }
        ]
    },
    {
        "image": "/img/faces/7.jpg",
        "name": "Anita Reddy",
        "role": "Head of Cyber Security",
        "social": [
            {
                "link": "https://linkedin.com/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            }
        ]
    },
    {
        "image": "/img/faces/8.jpg",
        "name": "Shreya Nair",
        "role": "Head of Business Development",
        "social": [
            {
                "link": "https://linkedin.com/",
                "icon": "fab fa-linkedin",
                "title": "LinkedIn"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fab fa-twitter",
                "title": "Twitter"
            }
        ]
    }
]

const Team = () => {
  return (
    <Layouts>
        <PageBanner pageTitle={"Our <span className=\"mil-thin\">Leadership</span><br> & <span className=\"mil-thin\">Expert Team</span>"} breadTitle={"Leadership"} anchorLabel={"Meet the team"} anchorLink={"#team"} />
      
        {/* team */}
        <section id="team">
            <div className="container mil-p-120-90">
                <div className="row">
                    {TeamData.map((item, key) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={`team-item-${key}`}>

                        <div className="mil-team-card mil-up mil-mb-30">
                            <img src={item.image} alt={item.name} />
                            <div className="mil-description">
                                <div className="mil-secrc-text">
                                    <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                    <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                    <ul className="mil-social-icons mil-center">
                                        {item.social.map((social_item, social_key) => (
                                        <li key={`team-item-${key}-${social_key}`}><a href={social_item.link} target="_blank" className="social-icon"><i className={social_item.icon}></i></a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;