// import { auth } from "@/auth"
 
// export default auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== "/login") {
//     const newUrl = new URL("/login", req.nextUrl.origin)
//     return Response.redirect(newUrl)
//   }
// })

export const config = {
    matcher: ["/add", "/list", "/orders"],
};

export { auth as middleware } from "@/auth"

