import React from "react";
import LinesIcon from "@layouts/svg-icons/Lines";
import InteractiveProjectCard from "@components/InteractiveProjectCard";

const ProjectsMasonry = ({ projects }) => {
    const projectRows = [];

    for (var i = 0; i < projects.length; i += 2 ) {
        projectRows.push(projects.slice(i, 2 + i));
    }

    return (
      <>
        {/* portfolio */}
        <section id="portfolio">
            <div className="container mil-portfolio mil-p-120-60">

                <div className="mil-lines-place"><LinesIcon /></div>
                <div className="mil-lines-place mil-lines-long"><LinesIcon /></div>

                <div className="row justify-content-between align-items-center">
                    {projectRows.map((row, row_key) => (
                    <React.Fragment key={`projects-item-${row_key}`}>
                        {row.map((item, key) => (
                        <div className={row_key%2==0 ? key%2 == 0 ? "col-lg-5" : "col-lg-6" : key%2 == 0 ? "col-lg-6" : "col-lg-5"} key={`projects-item-${row_key}-${key}`}>

                            <InteractiveProjectCard
                                href={`/projects/${item.id}`}
                                image={item.image}
                                video={item.video}
                                title={item.title}
                                category={item.category}
                                date={item.date}
                                itemClassName={row_key%2==0 ? key%2 == 0 ? "mil-portfolio-item mil-more mil-mb-60" : "mil-portfolio-item mil-more mil-parallax mil-mb-60" : key%2 == 0 ? "mil-portfolio-item mil-more mil-parallax mil-mb-60" : "mil-portfolio-item mil-more mil-mb-60"}
                                frameClassName="mil-image-frame mil-horizontal mil-up"
                                dataValue1="60"
                                dataValue2="-60"
                            />

                        </div>
                        ))}
                    </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
        {/* portfolio end */}
      </>
    );
};
export default ProjectsMasonry;
