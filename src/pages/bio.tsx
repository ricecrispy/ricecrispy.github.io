import Content from '../components/content';
import Profile from '../components/profile';

function GetContent() {
  return (
    <Profile />
  );
}

export default function Bio() {
  return (
    <Content ChipLabel="Info" Content={GetContent()} />
  );
}
