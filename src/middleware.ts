import { withAuth } from "next-auth/middleware"
export default withAuth({
  callbacks: {
    async authorized({ req, token }) {
      const { nextUrl } = req;
      if (nextUrl.pathname.startsWith("/admin")) {
        if (token?.role === "ADMIN") {
          return true;
        }
        return false;
      }

      return true;
    }
  }
})
