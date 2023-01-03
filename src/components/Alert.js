import { Alert, Space } from "antd";
import React from 'react'

export default function AlertComp({setSuccess}) {
    const onClose=()=>{
        setSuccess(false);
    }
  return (
    <div>
      <Space
		direction="vertical"
		style={{
			width: "100%",
		}}
	>
		<Alert
			message="Posted Successfully"
			type="success"
			closable
			onClose={onClose}
		/>
	</Space>
    </div>
  )
}
