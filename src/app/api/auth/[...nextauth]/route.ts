import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.username,
            password: credentials?.password
          }),
          headers: { "Content-Type": "application/json" }
        });
        
        const user = await res.json();

        if (res.ok && user.success) {  // also check user.success
          return user;
        }
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
