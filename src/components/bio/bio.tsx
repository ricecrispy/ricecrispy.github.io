import Content from "../common/content";
import Profile from "./profile";

function GetContent() {
  return <Profile />;
}

export default function Bio() {
  return <Content ChipLabel="Info" Content={GetContent()} />;
}
