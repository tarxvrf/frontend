import { createRoute,createRouter,createRootRoute } from "@tanstack/react-router";

import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

//Root
const rootRoute = createRootRoute({
    component:MainLayouts
})

//Routes
const homeRoute = createRoute({
    getParentRoute:()=>rootRoute,
    path:"/",
    component:Home
})
const contactRoute = createRoute({
    getParentRoute:()=> rootRoute,
    path:"/contact",
    component:Contact
})

const aboutRoute = createRoute({
    getParentRoute:()=> rootRoute,
    path:"/about",
    component:About
})

// Tree
const routeTree = rootRoute.addChildren([
    homeRoute,aboutRoute,contactRoute
])

export const router  = createRouter({routeTree})