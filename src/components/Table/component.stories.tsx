import { useState } from "preact/hooks";
import { Table, type TableSort, TableSortDirection } from "./index";

const meta = {
	title: "Prometheus/Table",
	component: Table,
};
export default meta;

const exampleData = [
	{
		ABBR: "CT",
		Name: "Connecticut",
		Population: 500,
	},
	{
		ABBR: "FL",
		Name: "Florida",
		Population: 1000,
	},
	{
		ABBR: "OH",
		Name: "Ohio",
		Population: 750,
	},
];

export const Default = () => {
	const [sort, setSort] = useState<TableSort>({
		columnIndex: 0,
		direction: TableSortDirection.ASC,
	});

	return (
		<Table
			data={exampleData}
			columns={[
				{
					display: (row) => {
						return row.ABBR;
					},
					name: "Code",
					sortFunction: (a, b) => {
						return a.ABBR > b.ABBR ? 1 : -1;
					},
				},
				{
					display: (row) => {
						return row.Name;
					},
					name: "Name",
					sortFunction: (a, b) => {
						return a.Name > b.Name ? 1 : -1;
					},
				},
				{
					display: (row) => {
						return row.Population;
					},
					name: "Population",
					sortFunction: (a, b) => {
						return a.Population > b.Population ? 1 : -1;
					},
				},
			]}
			sort={sort}
			setSort={setSort}
		/>
	);
};
