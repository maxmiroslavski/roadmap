import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID || "",
      clientSecret: process.env.VK_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Пример проверки: можно подключить реальную базу данных
        const user = {
          id: "1",
          name: "Mr. Johnson",
          email: "john@example.com",
        };

        if (
          credentials?.username === "misterjohnson" &&
          credentials?.password === "password123"
        ) {
          return user; // Успешный вход
        }

        throw new Error("Invalid username or password"); // Ошибка входа
      },
    }),
    // OAuthProvider({
    //   name: "CustomOAuth",
    //   clientId: process.env.CUSTOM_OAUTH_CLIENT_ID || "",
    //   clientSecret: process.env.CUSTOM_OAUTH_CLIENT_SECRET || "",
    //   authorization: {
    //     url: "https://custom-oauth-provider.com/authorize",
    //     params: { scope: "openid profile email" },
    //   },
    //   token: "https://custom-oauth-provider.com/token",
    //   userinfo: "https://custom-oauth-provider.com/userinfo",
    //   profile(profile) {
    //     return {
    //       id: profile.sub,
    //       name: profile.name,
    //       email: profile.email,
    //       image: profile.picture,
    //     };
    //   },
    // }),

    // ...add more providers here
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: "jwt", // JWT для хранения сессий
  // },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (token) {
  //       session.user.id = token.id;
  //     }
  //     return session;
  //   },
  // },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
