import React from 'react';
import { Timeline, Icon } from 'antd';

const CustomeTimeline = (props) => {
    return (
        <Timeline mode="alternate">
            <Timeline.Item color='green'>Start the projcet {props.startDate}</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }}/>}>Realiztion</Timeline.Item>
            <Timeline.Item color="red">Deadline {props.endDate}</Timeline.Item>
        </Timeline>

    );
};
export default CustomeTimeline;
