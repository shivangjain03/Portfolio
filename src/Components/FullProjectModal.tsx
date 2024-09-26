import { Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text } from "@mantine/core";

const FullProjectModal=(props:any)=>{
    return  <Modal.Root scrollAreaComponent={ScrollArea.Autosize}
    size="70%" className="font-mono" opened={props.opened} onClose={props.close}>
    <Modal.Overlay />
    <Modal.Content className="!rounded-xl">
      <Modal.Header className="!bg-bgColor border-primaryColor !border-b-0 !border-2 !rounded-tl--3xl !rounded-tr-3xl">
        <Modal.Title data-autofocus className="!text-4xl font-mono text-white flex gap-3 items-center  !font-bold ">{props.title}{props.live==true&& <Badge className="flex items-center gap-1" size="lg" variant="outline" color="red" rightSection={<Indicator color="red" position="middle-end" size={10} processing></Indicator>}>Live </Badge>}</Modal.Title>
        <Modal.CloseButton variant="transperent" size="md" iconSize="30px" className="hover:text-white"  />
      </Modal.Header>
      <Modal.Body className="!bg-bgColor !pt -2 border-primaryColor !border-t-0 !border-2 !rounded-bl--3xl !rounded-br-3xl">
      <Image
          className="rounded-xl  !shadow-[0_0_5px_#4cbbd4]"
            src={props.image}
            alt={props.image}
          />
           <Group mt="md" mb="xs">
            {props.technologies.map((tech:string, index:number)=> <Badge variant="light" size="xl" color="#4cbbd4">{tech}</Badge>)}
        </Group>
        <Text className="!text-justify mt-10"  size="md" c="dimmed">
            {props.desc}
        </Text>
        <Group justify="space-between" mt="md" >
        <a href={props.github} target="_blank"  className="!w-[48%]" ><Button variant="outline" size="lg" color="#4cbbd4" fullWidth mt="md" radius="md">
          View Code
        </Button></a>
        <a href={props.link} target="_blank" className="!w-[48%]"><Button variant="outline" size="lg" color="#4cbbd4"  fullWidth mt="md" radius="md">
          View Live App
        </Button></a>

        </Group>
        
        </Modal.Body>
    </Modal.Content>
  </Modal.Root>

}
export default FullProjectModal;