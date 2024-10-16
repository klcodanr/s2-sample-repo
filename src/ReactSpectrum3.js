import React from "react";
import { ActionButton, ActionMenu, Button, ButtonGroup, Content, Dialog, DialogTrigger, Flex, Heading, Header, Item, Picker, Provider, Text, TextField, View, defaultTheme} from '@adobe/react-spectrum'

export function ReactSpectrum3() {
  return (<Provider theme={defaultTheme}>
        <View padding="size-1000">
            <Flex direction="column" gap="size-100">
            <Heading level={3}>Hello from Spectrum 2</Heading>
            <View>
                <DialogTrigger isDismissable>
                    <Button>Open Dialog</Button>
                    <Dialog>
                        <Header>Dialog Header</Header>
                        <Content>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante et leo pretium elementum. Nullam hendrerit, libero ut efficitur vestibulum, nisl mi consectetur velit, sed tristique sapien quam non urna. Nam bibendum tellus at turpis condimentum, quis eleifend dolor scelerisque. Quisque vitae vestibulum velit. Nullam nec magna quis nibh dapibus ornare. Fusce ullamcorper varius lectus vitae sagittis. In suscipit, leo nec ornare tincidunt, felis augue posuere risus, vel varius velit lectus at lorem. Mauris risus libero, dignissim et pretium ut, gravida eu tortor. Morbi faucibus eleifend tortor in convallis. Nunc eu lacinia nisl.</Text>
                        </Content>
                    </Dialog>
                </DialogTrigger>
            </View>
            <Flex direction="row" gap="size-100" justifyContent="space-between">
                <View>
                    <Heading>Column 1 - Buttons</Heading>
                    <ButtonGroup orientation="vertical">
                        {['accent', 'primary','secondary','negative'].map(v => <Button variant={v}>{v}</Button>)}
                        <ActionButton>Action</ActionButton>
                        <ActionButton isQuiet>Quiet Action</ActionButton>
                    </ButtonGroup>
                </View>
                <View>
                    <Heading>Column 2 - Action Menu</Heading>
                    <ActionMenu>
                    <Item>
                        Cut
                    </Item>
                    <Item>
                        Copy
                    </Item>
                    <Item>
                        Paste
                    </Item>
                    </ActionMenu>
                </View>
                <View>
                    <Heading>Column 3 - Form Controls</Heading>
                    <Flex direction="column">
                        <TextField label="Name" />
                        <Picker label="Ice cream flavor">
                            <Item>
                                Chocolate
                            </Item>
                            <Item>
                                Mint
                            </Item>
                            <Item>
                                Strawberry
                            </Item>
                            <Item>
                                Vanilla
                            </Item>
                            <Item>
                                Chocolate Chip Cookie Dough
                            </Item>
                        </Picker>
                    </Flex>
                </View>
            </Flex>
        </Flex>
    </View>
  </Provider>);
}
