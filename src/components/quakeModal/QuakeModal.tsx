import { Col, Divider, Modal, Row, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from 'hooks';
import { formatToUnit, quakeLocString, Units } from 'utils/Unit';

export function QuakeModal(): JSX.Element {
  const selected = useAppSelector((s) => s.ui.selected);
  const dispatch = useAppDispatch();

  const onClose = (): void => {
    dispatch.ui.setQuake(undefined);
  };

  const date = new Date(selected?.date || 0);
  const dateTme = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  return (
    <Modal
      closable
      centered
      open={Boolean(selected)}
      onCancel={onClose}
      footer={null}
      width="550px"
      className="quake-modal"
    >
      <Typography.Title level={2}>Event</Typography.Title>
      <Row gutter={16}>
        <Col span={6}>
          <Typography.Text>Event at</Typography.Text>
        </Col>
        <Col>
          <Typography.Text>{selected?.location}</Typography.Text>
          <Typography.Title level={3}>{dateTme}</Typography.Title>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={6}>
          <Typography.Text>Event magnitude</Typography.Text>
        </Col>
        <Col>
          <Typography.Title level={4}>{selected?.magnitude}</Typography.Title>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={6}>
          <Typography.Text>Event intensity</Typography.Text>
        </Col>
        <Col>
          <Typography.Title level={4}>{selected?.intensity}</Typography.Title>
          <Typography.Text type="secondary">{selected?.intensityDescription}</Typography.Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={6}>
          <Typography.Text>Event depth</Typography.Text>
        </Col>
        <Col>
          <Typography.Title level={4}>{formatToUnit(selected?.depth, Units.km)}</Typography.Title>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={6}>
          <Typography.Text>Event locations</Typography.Text>
        </Col>
        <Col>
          <Typography.Title level={4}>{quakeLocString(selected)}</Typography.Title>
        </Col>
      </Row>
    </Modal>
  );
}
