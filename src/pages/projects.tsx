import Content from "../components/content";

function GetContent() {
  return (
    <section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Magnis dis parturient
      montes nascetur ridiculus mus mauris vitae ultricies. A diam maecenas sed
      enim ut. Rhoncus est pellentesque elit ullamcorper. Rhoncus mattis rhoncus
      urna neque viverra justo nec ultrices dui. Id velit ut tortor pretium
      viverra suspendisse potenti. Leo duis ut diam quam nulla porttitor massa.
      Fermentum et sollicitudin ac orci phasellus egestas. Metus dictum at
      tempor commodo ullamcorper. Placerat in egestas erat imperdiet sed
      euismod. Bibendum est ultricies integer quis auctor elit sed vulputate mi.
      Morbi tristique senectus et netus et. Vulputate ut pharetra sit amet
      aliquam id diam maecenas. Neque laoreet suspendisse interdum consectetur
      libero id faucibus. Hac habitasse platea dictumst vestibulum rhoncus est
      pellentesque. Venenatis lectus magna fringilla urna porttitor rhoncus
      dolor purus. Tincidunt tortor aliquam nulla facilisi. Purus gravida quis
      blandit turpis cursus in hac habitasse. Eget arcu dictum varius duis at
      consectetur lorem donec. Facilisis magna etiam tempor orci eu lobortis
      elementum nibh. Sapien faucibus et molestie ac feugiat sed. Pretium quam
      vulputate dignissim suspendisse in est ante in. Duis at consectetur lorem
      donec massa sapien faucibus. Massa sed elementum tempus egestas sed sed.
      Vel facilisis volutpat est velit egestas dui id. Quam pellentesque nec nam
      aliquam sem et. Phasellus faucibus scelerisque eleifend donec pretium
      vulputate sapien nec. Sit amet consectetur adipiscing elit duis tristique
      sollicitudin nibh. Magna fringilla urna porttitor rhoncus. Nunc eget lorem
      dolor sed viverra ipsum nunc aliquet bibendum. Donec et odio pellentesque
      diam volutpat commodo sed egestas egestas. Eget duis at tellus at urna
      condimentum mattis. Vitae nunc sed velit dignissim. Et sollicitudin ac
      orci phasellus egestas tellus rutrum. Purus viverra accumsan in nisl nisi.
      Lectus quam id leo in vitae turpis. Vel pretium lectus quam id leo in
      vitae turpis. Tellus elementum sagittis vitae et leo duis. Cras ornare
      arcu dui vivamus arcu felis bibendum ut tristique. Augue lacus viverra
      vitae congue. Ut faucibus pulvinar elementum integer enim neque. Mauris a
      diam maecenas sed enim ut sem. Nulla pellentesque dignissim enim sit amet
      venenatis urna cursus eget. Vel risus commodo viverra maecenas accumsan
      lacus vel. Egestas maecenas pharetra convallis posuere morbi leo urna
      molestie. Augue neque gravida in fermentum et sollicitudin ac. Suspendisse
      in est ante in. Pellentesque sit amet porttitor eget. Venenatis a
      condimentum vitae sapien pellentesque habitant morbi.
    </section>
  );
}

export default function Project() {
  return <Content ChipLabel="About My Projects" Content={GetContent()} />;
}
