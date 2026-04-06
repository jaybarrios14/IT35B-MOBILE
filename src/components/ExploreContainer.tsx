import { IonButton } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <IonButton>Default</IonButton>
      <IonButton disabled={true}>Disabled</IonButton>
    </>
  );
};

export default ExploreContainer;
