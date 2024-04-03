import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  locales,
  defaultLocale: "ar",
  localePrefix,
});

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
