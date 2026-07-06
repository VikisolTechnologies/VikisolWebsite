import React from "react";
import LinesIcon from "@layouts/svg-icons/Lines";
import InteractiveProjectCard from "@components/InteractiveProjectCard";

const ProjectsGrid = ({ projects, columns }) => {
    const projectRows = [];

    for (var i = 0; i < projects.length; i += 3 ) {
        projectRows.push(projects.slice(i, 3 + i));
    }

    const renderProjectColumnClass = (row_key, key, element) => {
        let classNameValue = [];

        if ( row_key%2 == 0 ) {
            if ( key%2 == 0 ) {
                if( (key+1)%3 == 0) {
                    classNameValue['column'] = "col-lg-12";
                    classNameValue['item'] = "mil-portfolio-item mil-more mil-mb-60";
                } else {
                    classNameValue['column'] = "col-lg-6";
                    classNameValue['item'] = "mil-portfolio-item mil-more mil-mb-60";
                }
            } else {
                classNameValue['column'] = "col-lg-5";
                classNameValue['item'] = "mil-portfolio-item mil-more mil-parallax mil-mb-60";
            }
        } else {
            if ( key%2 == 0 ) {
                if( (key+1)%3 == 0) {
                    classNameValue['column'] = "col-lg-12";
                    classNameValue['item'] = "mil-portfolio-item mil-more mil-mb-60";
                } else {
                    classNameValue['column'] = "col-lg-5";
                    classNameValue['item'] = "mil-portfolio-item mil-more mil-parallax mil-mb-60";
                }
            } else {
                classNameValue['column'] = "col-lg-6";
                classNameValue['item'] = "mil-portfolio-item mil-more mil-mb-60";
            }
        }

        if ( element == 'item' ) {
            return classNameValue['item'];
        } else {
            return classNameValue['column'];
        }
    }

    return (
      <>
        {/* portfolio */}
        <section id="portfolio">
            <div className="container mil-portfolio mil-p-120-60">

                <div className="mil-lines-place"><LinesIcon /></div>
                <div className="mil-lines-place mil-lines-long"><LinesIcon /></div>

                <div className="row justify-content-between align-items-end">
                    {projectRows.map((row, row_key) => (
                    <React.Fragment key={`projects-row-${row_key}`}>
                    {row.map((item, key) => (
                    <div className={renderProjectColumnClass(row_key, key, 'column')} key={`projects-item-${key}`}>

                        <InteractiveProjectCard
                            href={`/projects/${item.id}`}
                            image={item.image}
                            video={item.video}
                            title={item.title}
                            category={item.category}
                            date={item.date}
                            itemClassName={renderProjectColumnClass(row_key, key, 'item')}
                            frameClassName="mil-cover-frame mil-hori mil-up"
                            dataValue1="-30"
                            dataValue2="0"
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
export default ProjectsGrid;
