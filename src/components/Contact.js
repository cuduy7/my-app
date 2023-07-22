import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import {TextInput, Select, Textarea, Button, Container, Icon} from 'react-materialize';
export default function Contact() {
  const { theme } = useContext(ThemeContext)
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='about'>
    <Container>
      <h3>Contact us</h3>
      <form onSubmit={handleSubmit}>
        <TextInput id="TextInput-38" label="Full Name" />
        <TextInput id="TextInput-39" label="Phone Number" />
        <TextInput email id="TextInput-41" label="Email" validate />
        <Select
          id="Select-46"
          multiple={false}
          onChange={function noRefCheck() {}}
          value=""
        >
          <option value="" disabled>
            Choose Nation
          </option>
          <option value="1">USA</option>
          <option value="2">France</option>
          <option value="3">England</option>
          <option value="4">Japan</option>
          <option value="5">Korea</option>
        </Select>
        <Textarea
          icon={<Icon>edit</Icon>}
          id="Textarea-28"
          label="Type content"
        ></Textarea>
        <Button>Submit</Button>
      </form>
    </Container>
    </div>
  );
}