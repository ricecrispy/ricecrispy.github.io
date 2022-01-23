import Content from "../components/content";

function GetContent() {
  return (
    <section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat
      in egestas erat imperdiet. Facilisis sed odio morbi quis commodo odio
      aenean sed. Netus et malesuada fames ac. Tincidunt nunc pulvinar sapien et
      ligula ullamcorper malesuada proin. Et malesuada fames ac turpis. Lacus
      vel facilisis volutpat est velit egestas. Lectus mauris ultrices eros in
      cursus turpis massa tincidunt. Vitae auctor eu augue ut lectus arcu. Sit
      amet nisl suscipit adipiscing. Facilisi cras fermentum odio eu feugiat.
      Tincidunt nunc pulvinar sapien et. Augue lacus viverra vitae congue eu
      consequat. Lectus quam id leo in vitae turpis massa sed elementum. Libero
      justo laoreet sit amet cursus. Dictum sit amet justo donec enim diam
      vulputate ut. Ut porttitor leo a diam sollicitudin tempor. A scelerisque
      purus semper eget duis at tellus at urna. Mi quis hendrerit dolor magna
      eget est lorem ipsum. Lacus luctus accumsan tortor posuere ac ut consequat
      semper viverra. Pulvinar neque laoreet suspendisse interdum consectetur
      libero id faucibus nisl. Volutpat diam ut venenatis tellus. Diam in arcu
      cursus euismod quis. Semper auctor neque vitae tempus quam pellentesque
      nec nam. Rhoncus est pellentesque elit ullamcorper dignissim. Vulputate
      odio ut enim blandit volutpat maecenas volutpat blandit. Scelerisque
      mauris pellentesque pulvinar pellentesque habitant morbi tristique. Cursus
      eget nunc scelerisque viverra mauris in aliquam sem fringilla. Ut faucibus
      pulvinar elementum integer enim. Urna id volutpat lacus laoreet non
      curabitur gravida arcu ac. Etiam tempor orci eu lobortis elementum nibh
      tellus molestie. Aliquam malesuada bibendum arcu vitae elementum curabitur
      vitae. Dolor sit amet consectetur adipiscing elit ut.
    </section>
  );
}

export default function Experience() {
  return <Content ChipLabel="About My Experience" Content={GetContent()} />;
}
