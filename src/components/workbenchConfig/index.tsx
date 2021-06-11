import { Col, Row, Card, Text, Input, Spacer } from "@geist-ui/react";
import { useWorkbench } from "../../store";
import { useEffect, useState } from "preact/hooks";
import React from "preact/compat";
import { debounce } from "home-assistant-js-websocket/dist/util";

const WorkbenchConfig = () => {

  const [_cardUrl, _setCardUrl] = useState('');
  const [_cardName, _setCardName] = useState('');
  const [_configCardName, _setConfigCardName] = useState('');

  const {workbench, updateWorkbench} = useWorkbench();

  useEffect(() => {

    _setCardUrl(workbench.cardUrl!);
    _setCardName(workbench.cardName!);
    _setConfigCardName(workbench.configCardName!);

  }, [])

  const _updateWorkbench = debounce(updateWorkbench, 500);

  /* @ts-ignore */
  const ext = e => e.target.value;

  const onUrl = (e: any) => (value => {
    _setCardUrl(value)
    _updateWorkbench({
      cardUrl: value
    })
  })(ext(e))

  const onName = (e: any) => (value => {
    _setCardName(value)
    _updateWorkbench({
      cardName: value
    })
  })(ext(e))

  const onConfigName = (e: any) => (value => {
    _setConfigCardName(value)
    _updateWorkbench({
      configCardName: value
    })
  })(ext(e))

  return (
    <Card>
      <Row gap={1}>
        <Col>
          <Row>
            <Text h4>Card URL</Text>
          </Row>
          <Row>
            <Input
              value={_cardUrl}
              onChange={onUrl}
              width="100%"
            />
          </Row>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col span={12}>
          <Row>
            <Text h4>Card Name</Text>
          </Row>
          <Row>
            <Input
              value={_cardName}
              onChange={onName}
              width="100%"
            ></Input>
          </Row>
        </Col>
        <Col span={12}>
          <Row>
            <Text h4>Config Card Name</Text>
          </Row>
          <Row>
            <Input
              value={_configCardName}
              onChange={onConfigName}
              width="100%"
            ></Input>
          </Row>
        </Col>
      </Row>
    </Card>
  )

}

export default WorkbenchConfig;