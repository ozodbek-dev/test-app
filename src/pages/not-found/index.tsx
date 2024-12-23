import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
const NotFound = () => {
	return (
		<Layout className='h-full'>
			<Layout>
				<Content
					style={{
						padding: 24,
						minHeight: 280,
						background: "#eff2f5",
					}}
					className='!h-[calc(100vh-64px)] overflow-auto'
				>
					<main className='main'>
						<h1 className='h1'>
							4<span>&#xf6e2;</span>4
						</h1>
						<h2 className='h2'>{"Error: 404 page not found"}</h2>
						<p className='p'>{"Sorry, the page you're looking for cannot be accessed"}</p>
					</main>
				</Content>
			</Layout>
		</Layout>
	);
};

export default NotFound;
