import {
  Form,
  Input,
  Select,
  DatePicker,
  Typography,
  InputNumber,
  Checkbox,
  Row,
  Col,
} from "antd";
import React from "react";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Title } = Typography;

const VaccinationForm: React.FC = () => {
  return (
    <React.Fragment>
      <Form.Item
        name="vaccineName"
        label="Vaccine Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="siteLocation"
        label="Site Location"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="distributionDate"
        label="Distribution Date"
        rules={[{ required: true }]}
      >
        <RangePicker />
      </Form.Item>

      <Title className="formContainerSubHeading" level={4}>
        Eligibility Criteria
      </Title>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select eligible gender">
          <Option value="maleOnly">Male Only</Option>
          <Option value="femaleOnly">Female Only</Option>
          <Option value="both">Both</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="minimumAge"
        label="Minimum Age"
        rules={[{ required: true }]}
      >
        <InputNumber min={0} max={100} />
      </Form.Item>
      <Form.Item
        name="ethnicity"
        label="Ethnicity"
        rules={[{ required: true }]}
      >
        <Checkbox.Group style={{ width: "100%" }}>
          <Row>
            <Col span={8}>
              <Checkbox value="Asian">Asian</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="European">European</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="American">American</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="African-American">African-American</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Aboriginal">Aboriginal</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
    </React.Fragment>
  );
};

export default VaccinationForm;
