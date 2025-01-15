import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import axios from "axios"
import { url } from "./url"
import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, AUTH_SECRET } from "./env"


export const { handlers, signIn, signOut, auth } = NextAuth({

    session: {
        strategy: "jwt",
    },

    providers: [
        Google({
            clientId: AUTH_GOOGLE_ID,
            clientSecret: AUTH_GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                },
            },
        }),
        GitHub({
            clientId: AUTH_GITHUB_ID,
            clientSecret: AUTH_GITHUB_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                },
            },
        }),
        Credentials({

            authorize: async (credentials) => {

                const { email, password } = credentials

                const response = await axios.post(url + "/auth/login", { email, password })

                if (response.data.status) {

                    return response.data.user
                }

                else {
                    throw new Error("ujala");
                }
            }
        })
    ],

    callbacks: {
        async signIn({ user, account }) {

            if (account?.provider === "credentials") {

                return !!user; // Allow sign-in if a user was returned by `authorize`
            }

            else {
                // User signed in using OAuth provider
                await axios.post(url + '/auth/registration', {
                    email: user.email,
                    username: user.name,
                    photo: user.image,
                    provider: account?.provider,
                })

                return true;
            }
        },

        async jwt({ token, account, user, trigger }) {

            if (trigger === "signIn" || trigger === "signUp") { // Account and user is available during sign-in
                token.provider = account?.provider
                token.user = user
                token.trigger = "signIn"
            }

            // else if (trigger === "update") {
            //     // session contains the updated data sent from client
            //     // You can update the token here

            //     token.user = session
            //     token.trigger = "update"
            // }

            return token
        },

        async session({ session, token }) {

            if (token.provider !== "credentials") {

                const response = await axios.post(url + "/user/read", { email: token.email, provider: token.provider })

                session.user = response.data.user;
            }

            else {
                session.user = token.user;
            }

            return session
        },

        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
    },

    secret: AUTH_SECRET,
    pages: {
        signIn: "/login",
    },
})