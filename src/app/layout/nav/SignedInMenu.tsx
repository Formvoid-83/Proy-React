import { Link, useNavigate } from "react-router-dom";
import { Menu, Image, Dropdown, DropdownItem, DropdownMenu } from "semantic-ui-react";

type Props = {
    setAuth: (value: boolean) => void;
    
}
export default function SignedInMenu({setAuth}: Props) {
    const navigate = useNavigate();
    function handleSignOut(){
        setAuth(false);
        navigate('/');
    }
  return (
    <Menu.Item position="right">
       <Image avatar spaced='right' src='/user.png'/>
       <Dropdown pointing='top left' text="Bob">
         <DropdownMenu>
         <DropdownItem as={Link} to='/createEvent' text='Create Event' icon='plus'/>
            <DropdownItem  text='My profile' icon='plus'/>
            <DropdownItem  text='Sign Out' icon='power' onClick={handleSignOut}/>
         </DropdownMenu>
       </Dropdown>
    </Menu.Item>
  )
}
