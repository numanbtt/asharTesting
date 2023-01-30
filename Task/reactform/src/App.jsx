import { useState, useEffect } from "react";

function App() {
	const [postData, setPostData] = useState([]);
	const getData = async () => {
		var data = await fetch("http://localhost:8000/posts");
		data = await data.json();
		setPostData(data);
		console.log(data);
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
						<th>Date</th>
					</tr>
					{postData.map((element) => {
						return (
							<tr key={element._id}>
								<td>{element._id}</td>
								<td>{element.title}</td>
								<td>{element.description}</td>
								<td>{element.date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
