import React from "react";
import "./index.css";

import { Radio, Button, Form, Input } from "antd";

export default function Doctor() {
  return (
    <div>
      <p>ลงทะเบียนแพทย์</p>
      <br />
      <br />
      <Form>
        <Form.Item
          name="doctor_id"
          label="เลขที่ใบประกอบวิชาชีพ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="doctor_fname"
          label="ชื่อ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="doctor_lname"
          label="นามสกุล :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="doctor_gender"
          label="เพศ"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio value="male">ชาย</Radio>
            <Radio value="female">หญิง</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="doctor_phone"
          label="เบอร์โทรศัพท์ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <p>ที่อยู่ที่สามารถติดต่อได้</p>

        <Form.Item
          name="doctor_address"
          label="ที่อยู่ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="doctor_province"
          label="จังหวัด :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="doctor_district"
          label="อำเภอ/เขต :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="doctor_subdistrict"
          label="ตำบล/แขวง :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="doctor_zipcode"
          label="รหัสไปรษณีย์ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Button type="primary">ลงทะเบียน</Button>
    </div>
  );
}
