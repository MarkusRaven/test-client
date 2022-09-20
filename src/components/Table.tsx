import React, { useState } from 'react'
import { Table as AntTable } from 'antd'
import { columns, data } from './types'

const Table = () => {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}

	return (
		<div className='container'>
			<AntTable
				rowSelection={rowSelection}
				pagination={{ pageSize: 20 }}
				columns={columns}
				dataSource={data}
			/>
		</div>
	)
}

export default Table
