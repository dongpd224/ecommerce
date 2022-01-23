import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import '../components/Nav.module.css'
import React from "react"
import { wrapper } from "../redux/store"

const MyApp = ({ Component, pageProps}) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp);