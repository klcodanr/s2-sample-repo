import React from "react";
import { ActionButton, ActionMenu, Button, ButtonGroup, Content, Dialog, DialogTrigger, Heading, Header, MenuItem, Picker, PickerItem, Provider, Text, TextField} from '@react-spectrum/s2'
import { style } from "@react-spectrum/s2/style" with {type: 'macro'};


import "@react-spectrum/s2/page.css";

export function Spectrum2() {
  return (<Provider background="base" styles={style({height: '[100vh]', padding: 0})}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 16, padding: 80}}>
        <Heading level={3}>Hello from Spectrum 2</Heading>
        <DialogTrigger isDismissable>
            <Button>Open Dialog</Button>
            <Dialog>
                <Header>Dialog Header</Header>
                <Content>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante et leo pretium elementum. Nullam hendrerit, libero ut efficitur vestibulum, nisl mi consectetur velit, sed tristique sapien quam non urna. Nam bibendum tellus at turpis condimentum, quis eleifend dolor scelerisque. Quisque vitae vestibulum velit. Nullam nec magna quis nibh dapibus ornare. Fusce ullamcorper varius lectus vitae sagittis. In suscipit, leo nec ornare tincidunt, felis augue posuere risus, vel varius velit lectus at lorem. Mauris risus libero, dignissim et pretium ut, gravida eu tortor. Morbi faucibus eleifend tortor in convallis. Nunc eu lacinia nisl.</Text>
                </Content>
            </Dialog>
        </DialogTrigger>
        <div className={style({display: 'flex', width: '[100%]', gap: 16, justifyContent: 'space-between'})}>
            <div>
                <Heading>Column 1 - Buttons</Heading>
                <ButtonGroup orientation="vertical">
                    {['accent', 'primary','secondary','negative'].map(v => <Button variant={v}>{v}</Button>)}
                    <ActionButton>Action</ActionButton>
                    <ActionButton isQuiet>Quiet Action</ActionButton>
                </ButtonGroup>
            </div>
            <div>
                <Heading>Column 2 - Action Menu</Heading>
                <ActionMenu>
                <MenuItem>
                    Cut
                </MenuItem>
                <MenuItem>
                    Copy
                </MenuItem>
                <MenuItem>
                    Paste
                </MenuItem>
                </ActionMenu>
            </div>
            <div>
                <Heading>Column 3 - Form Controls</Heading>
                <TextField label="Name" />
                <Picker
                    label="Ice cream flavor">
                    <PickerItem>
                        Chocolate
                    </PickerItem>
                    <PickerItem>
                        Mint
                    </PickerItem>
                    <PickerItem>
                        Strawberry
                    </PickerItem>
                    <PickerItem>
                        Vanilla
                    </PickerItem>
                    <PickerItem>
                        Chocolate Chip Cookie Dough
                    </PickerItem>
                    </Picker>
            </div>
        </div>
    </div>
  </Provider>);
}
