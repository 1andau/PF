import { Outlet } from "react-router-dom";
import { Header } from "../index";

 const Layout = () => {

  return (
		<>
			<Header />
			<main id="content">
				<Outlet />
			</main>
		</>
  )
}

export { Layout };
