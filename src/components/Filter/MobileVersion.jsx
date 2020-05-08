import React, { useState } from "react";
import { Row, Col, Button, Drawer } from "antd";

import Preview from "./Preview";
import FilterBar from "./FilterBar";

const MobileVersion = () => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Row>
      <Col span={24} style={{ marginBottom: "20px" }}>
        <Button onClick={() => setVisible(true)}>Apply Filter</Button>

        <Drawer
          title=""
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <FilterBar />
        </Drawer>
      </Col>
      <Col span={24}>
        <Preview />
      </Col>
    </Row>
  );
};

export default MobileVersion;
