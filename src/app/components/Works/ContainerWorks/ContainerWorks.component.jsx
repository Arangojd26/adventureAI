import React from "react";
import ContainerDescription from "../../../Shared/ContainerDescription/ContainerDescription.component";
import ContainerParallax from "../../Home/ContainerParallax/ContainerParallax.component";
import Description from "../../Home/Description/Description.component";
import imgProjects from "../../../../assets/images/Projects2.png";
import "./ContainerWorks.scss";
import audioUno from "../../../../assets/audios/audio1.mp3";

const title = "Camping IA";
const subtitle = (
  <>
    Recomendación de <br /> campings personalizados
  </>
);

const ContainerWorks = ({ idPage, showPicture }) => {
  return (
    <div className="o-container-profile">
      <ContainerParallax idPage={idPage} showPicture={showPicture}>
        {idPage === 1 && (
          <ContainerDescription>
            <Description title={title} subtitle={subtitle} />
            <audio className="o-audio" controls src={audioUno} autoPlay />
          </ContainerDescription>
        )}

        <div className="o-container-image-profile">
          {idPage === 1 && (
            <div className="o-container-image-projects">
              <img
                className="o-img-projects"
                src={imgProjects}
                alt="projects"
              />
            </div>
          )}
        </div>
      </ContainerParallax>
    </div>
  );
};

export default ContainerWorks;
