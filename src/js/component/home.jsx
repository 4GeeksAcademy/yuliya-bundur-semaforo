import React, { useState } from "react";

//create your first component

const Home = () => {
	const [red, setRed] = useState("secondary")
	const [green, setGreen] = useState("secondary")
	const [yellow, setYellow] = useState("secondary")


	function changeRed() {
		setRed("danger")
		setGreen("secondary")
		setYellow("secondary")
	}

	function changeGreen() {
		setGreen("success")
		setRed("secondary")
		setYellow("secondary")
	}

	function changeYellow() {
		setGreen("secondary")
		setRed("secondary")
		setYellow("warning")
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5"
				style={{ color: "white" }}>semaforo</h1>
			<div className="d-flex  flex-column mb-3">
				<div className="cols-3 ">
					<button type="button" className={"rounded-circle btn btn-" + red}
						onClick={changeRed}
						style={{ width: "150px", height: "150px" }}></button>
				</div>
				<br />
				<div className="cols-3 ">
					<button type="button" className={"rounded-circle btn btn-" + green}
						onClick={changeGreen}
						style={{ width: "150px", height: "150px" }}></button>
				</div>
				<br />
				<div className="cols-3 ">
					<button type="button" className={"rounded-circle btn btn-" + yellow}
						onClick={changeYellow}
						style={{ width: "150px", height: "150px" }}></button>
				</div>
			</div>

		</div>
	);
};


export default Home;
