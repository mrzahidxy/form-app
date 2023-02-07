import { Input } from "antd";
import {
	LockOutlined,
	MailOutlined,
	PhoneOutlined,
	UserOutlined,
} from "@ant-design/icons";

const Login = () => {


	return (
		<div className="w-screen h-screen flex flex-col bg-slate-100">
			<div className="flex flex-row h-full w-full border shadow-lg">
				{/* BANNER */}
				<div className={`relative flex-1 bg-gradient-to-b from-blue-600 to-blue-400`}>
			
				</div>
				{/* Form */}
				<div className="w-full h-full flex-1 flex justify-center items-center bg-white">
					<div className="w-2/3">

						<form className="w-full space-y-3 mt-8">
							<Input
								style={{
									padding: "14px",
								}}
								placeholder="Phone"
								prefix={<PhoneOutlined />}
							></Input>
							<Input.Password
								placeholder="Password"
								style={{
									padding: "14px",
								}}
								prefix={<LockOutlined />}
							/>
							<div className="flex justify-between text-sm font-medium pb-7">
								<div className="flex gap-1">
									<input
										type="checkbox"
										className="checked:bg-blue-500"
									/>
									<span className="text-neutral-500"> Keep me signed in</span>
								</div>
								<span className={`cursor-pointer text-blue-500`}>
									Forget Your Password?
								</span>
							</div>
							<button className={`w-full bg-blue-700 px-4 py-4  text-white font-bold rounded-md transition ease-in-out delay-150 hover:bgblue-400`}>
								Log In and Continue
							</button>
						</form>
						<div className="mt-8 space-x-1">
							<span className="text-neutral-500">Don't have an account?</span>

							<span className={`text-blue-600 font-medium`}>Register</span>
						</div>
					</div>
				</div>
			</div>
		</div>);
}

export default Login