import React from "react";
import {
  Provider,
  Button,
  Content,
  DialogTrigger,
  Dialog,
  Heading,
  Header,
} from "@react-spectrum/s2";
import {style} from '@react-spectrum/s2/style' with {type: 'macro'};

import "@react-spectrum/s2/page.css";

export function Spectrum2() {
  return (
    <Provider background="base">
      <Heading level={1}>Welcome to Spectrum 2!</Heading>
      <DialogTrigger>
        <Button>Click me!</Button>
        <Dialog isDismissable>
          <Header>I'm a dialog!</Header>
          <Content>I'm the body of the dialog</Content>
        </Dialog>
      </DialogTrigger>
    </Provider>
  );
}
