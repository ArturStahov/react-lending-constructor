import React from 'react'
import { LabelSelected, LabelText } from './StyledComponent'
import { Select } from 'antd';
const { Option } = Select;


/**
 * 
 * @param {Array} itemArr this array items props 
 * @param {function} onHandlerSelect this return value on component FormAddItem
 * @returns {Select} this jsx SelectUI plugin
 */
export default function SelectActivTab({ itemArr, onHandlerSelect, title, placeholder }) {
    let uniqArr = [...new Set(itemArr.map(e => e.tabName))]
    return (
        <LabelSelected>
            <LabelText>{title}</LabelText>
            <Select defaultValue={placeholder} style={{ width: 220 }} onChange={(value) => onHandlerSelect(value)}>
                {uniqArr.length > 0 && uniqArr.map((item) => (
                    <Option key={item} value={item}>{item}</Option>
                ))}

            </Select>
        </LabelSelected>
    )
}