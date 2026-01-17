// app/api/auth/[...nextauth]/route.ts
//import NextAuth from "next-auth"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

// 1. Exportamos la configuración para que otros archivos la vean
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        usuario: { label: "Usuario", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.usuario || !credentials?.password) return null
        const user = await prisma.user.findUnique({
          where: { usuario: credentials.usuario }
        })
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { 
            id: user.id.toString(), 
            name: user.name, 
            role: user.role 
          }
        }
        return null
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
}

// 2. El handler de NextAuth usa esa configuración
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
/*const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        //email: { label: "Email", type: "text" },
        usuario: { label: "Usuario", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.usuario || !credentials?.password) return null

        const user = await prisma.user.findUnique({
          where: { usuario: credentials.usuario }
        })

        // Aquí es donde comparamos la contraseña ingresada con la de la DB
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          console.log("** id del authorize** :", user.id.toString());
          return { 
            id: user.id.toString(), 
            name: user.name, 
            role: user.role 
          }
        }
        return null
      }
    })
  ],

  session: {
    strategy: "jwt", // Esto hace que la sesión sea rápida y no consulte la DB en cada clic
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.id = user.id;
        console.log("Usuario encontrado en login:", user);
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Token en sesión:", token);
      if (session.user) {
        // @ts-ignore
        session.user.id = token.id;
        session.user.id = (token.id || token.sub) as string;
        console.log("Usuario encontrado en session:", session.user.id);
        (session.user as any).role = token.role;
      }
      return session;
    },
  },

  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }*/