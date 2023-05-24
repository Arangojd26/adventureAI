import ContainerDescription from "../../../Shared/ContainerDescription/ContainerDescription.component";
import ContainerParallax from "../ContainerParallax/ContainerParallax.component";
import Description from "../Description/Description.component";
import "./ContainerProfile.scss";
import audioLofi from "../../../../assets/audios/audioLofi.mp3";

const title = <>AdventureAI</>;
const subtitle = (
  <>
    Descubre el mundo / <br />
    Asistente de camping inteligente
  </>
);

const ContainerProfile = ({ idPage, showPicture }) => {
  return (
    <div className="o-container-profile">
      <div className="o-container-image-profile">
        <ContainerParallax idPage={idPage} showPicture={showPicture}>
          {idPage === 0 && (
            <ContainerDescription>
              <Description title={title} subtitle={subtitle} />
              <audio className="o-audio" controls src={audioLofi} autoPlay />
            </ContainerDescription>
          )}
        </ContainerParallax>
      </div>
    </div>
  );
};

export default ContainerProfile;
