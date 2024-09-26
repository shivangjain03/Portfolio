import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Burger, NavLink } from '@mantine/core';
import { IconCircleDashedLetterS, IconX } from '@tabler/icons-react';
import { navLink } from './Header';

const  Sidebar=()=> {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>

      <Drawer.Root className='bs:hidden !z-50' position='right' opened={opened} onClose={toggle} size="50vw">
        <Drawer.Overlay  className='!z-0' style={{ backgroundOpacity: 0.5, blur: 4 }} />
        <Drawer.Content className='!z-0' bg="#121212">
          <Drawer.Body className='mt-20 flex flex-col gap-5' bg="#121212">{navLink(true, toggle)}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      
      <Burger className='bs:!hidden !z-10 ' size="lg" color='#4cbbd4' opened={opened} onClick={toggle} />
      
    </>
  );
}
export default Sidebar;
