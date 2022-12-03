import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";

 const Layout = () => {

  return (
		<>
			<Header />
			<main id="content">
				<Outlet />
				<Footer />
			</main>
		</>
  )
}

export { Layout };
