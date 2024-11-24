"use client"; // Required if using Next.js with React 18 and above
import React from 'react';
import { PlusOutlined } from '@ant-design/icons'; 
import {
    Button,
    ColorPicker,
    Form,
    Input,
    Select,
    Upload,
    Checkbox,
    Typography,
} from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

const TestimonialSpaceForm = () => {
    const onFinish = (values) => {
        console.log('Received values: ', values);
        // Handle form submission logic here
    };

    return (
        <div className='p-5'>
            <Title level={3} style={{ textAlign: 'center' }}>Create a New Space</Title>
            <Form
                layout="vertical"
                onFinish={onFinish}
                style={{ maxWidth: 600, margin: '0 auto' }}
            >
                {/* Space Name */}
                <Form.Item 
                    label="Space Name" 
                    name="spaceName" 
                    rules={[{ required: true, message: 'Please enter the space name!' }]}
                >
                    <Input placeholder="Enter your space name" />
                </Form.Item>

                {/* Public URL */}
                <Form.Item label="Public URL" required>
                    <Input />
                </Form.Item>

                {/* Space Logo */}
                <Form.Item label="Space Logo" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Change</div>
                        </div>
                    </Upload>
                </Form.Item>

                {/* Header Title */}
                <Form.Item 
                    label="Header Title" 
                    name="headerTitle" 
                    rules={[{ required: true, message: 'Please enter a header title!' }]}
                >
                    <Input placeholder="Enter your custom header title" />
                </Form.Item>

                {/* Custom Message */}
                <Form.Item 
                    label="Your Custom Message" 
                    name="customMessage" 
                    rules={[{ required: true, message: 'Please enter a custom message!' }]}
                >
                    <TextArea rows={4} placeholder="Your message here..." maxLength={100} />
                </Form.Item>

                {/* Video Message */}
                <Form.Item label="Your Video Message (URL)">
                    <Input placeholder="Paste your video URL here" />
                </Form.Item>

                {/* Collect Extra Information */}
                <Form.Item label="Collect Extra Information">
                    <Checkbox>Collect star ratings</Checkbox>
                </Form.Item>

                {/* Custom Button Color */}
                <Form.Item label="Custom Button Color" name="buttonColor">
                    <ColorPicker />
                </Form.Item>

                {/* Language Selection */}
                <Form.Item label="Language" name="language">
                    <Select placeholder="Select a language">
                        <Select.Option value="en">Nepali</Select.Option>
                        <Select.Option value="es">English</Select.Option>
                        
                    </Select>
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Create Space
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default TestimonialSpaceForm;
