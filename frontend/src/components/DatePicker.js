import React, { Component } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
class CustomeDatePicker extends Component {

range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
}

disabledDateTime = () => {
    return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56]
    };
}

render () {
    console.log(this.props.defaultValue);

    return (
        <div>

            <RangePicker
                disabledDate={this.disabledDate}
                defaultValue={[moment('2015-06-06', "YYYY-MM-DD"), moment('2015-06-06', "YYYY-MM-DD")]}
                format="YYYY-MM-DD"
                onChange={(dates) => {
                    this.props.onChange(dates[0]._d, dates[1]._d);
                }
                }
            />
        </div>
    );
}
}
export default CustomeDatePicker;
