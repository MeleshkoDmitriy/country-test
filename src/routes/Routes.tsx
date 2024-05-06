import { Route, Routes } from "react-router-dom"
import { FC } from "react"
import { HomePage } from "../pages/HomePage/HomePage"
import { CountryPage } from "../pages/CountryPage/CountryPage"
import { ROUTES } from "../utils/routes"


export const AppRoutes:FC = () => {
    return (
        <Routes>
            <Route index element={ <HomePage /> }/>
            <Route path={ROUTES.COUNTRY} element={ <CountryPage /> }/>
        </Routes>
    )
}