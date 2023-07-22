import { ThemeContext } from './ThemeContext';
import { Icon, Container, Section, Collapsible, CollapsibleItem, Slider, Slide, Caption } from 'react-materialize';
export default function About() {
    return (
        <div className="about">
          <h5>About Me</h5>
      <Collapsible accordion>
        <CollapsibleItem
          expanded={false}
          header="About Me"
          icon={<Icon>assignment_ind</Icon>}
          node="div"
        >  
            I'm Dang Dinh Duy from FPT University.My website was created to provide viewers with extensive information about movie-related events.
        </CollapsibleItem>
        <CollapsibleItem
          expanded={false}
          header="Nation"
          icon={<Icon>room</Icon>}
          node="div"
        >
            I am Vietnamese and I really like American movies and a lots of movies on the over the world specially Hollywood. 
        </CollapsibleItem>
    
      </Collapsible>
      </div>
    );
}