import { Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'

export enum UserGender {
	MALE = 'Мужской',
	FEMALE = 'Женский',
}

export interface Data {
	key: React.Key
	id: string
	email: string
	name: string
	gender: UserGender
	age: number
}

export const data: Data[] = [
	{
		key: 1,
		id: '1',
		email: 'das',
		name: 'das',
		gender: UserGender.MALE,
		age: 23,
	},
	{
		key: 2,
		id: '2',
		email: 'das',
		name: 'das',
		gender: UserGender.FEMALE,
		age: 23,
	},
	{
		key: 3,
		id: '3',
		email: 'das',
		name: 'das',
		gender: UserGender.MALE,
		age: 23,
	},
]

export const columns: ColumnsType<Data> = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'E-mail',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: 'Имя',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Возраст',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Пол',
		dataIndex: 'gender',
		key: 'gender',
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<Space size='middle'>
				<a>Delete</a>
			</Space>
		),
	},
]
