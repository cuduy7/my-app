import { Icon, Container, Section, Collapsible, CollapsibleItem, Slider, Slide, Caption } from 'react-materialize';
export default function News() {
  return (
    <div className="about">
      <h1 className="center">News</h1>
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="What's New Today?"
          icon={<Icon>newspaper</Icon>}
          node="div"
        >
          <Caption placement="left">
                <h3 style={{textAlign: 'center'}}>Spider-Man: Across the Spider-Verse release date, trailer, cast and all you need to know</h3>
                <h4>
                Spider-Man: Across the Spider-Verse is still some way away, having been hit with a few delays, but the much-anticipated sequel will be swinging into cinemas in June 2023. Across the Spider-Verse is the first of a two-part follow-up to the award-winning Spider-Man: Into the Spider-Verse.

The third film has also been given a stand-alone title of Spider-Man: Beyond the Spider-Verse. (Across the Spider-Verse and Beyond the Spider-Verse were originally titled Part One and Part Two.)
                  </h4>
          </Caption>
        </CollapsibleItem>
      </Collapsible>
    </div>
  )
}