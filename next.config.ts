import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
    includePaths: [path.join(__dirname, "src/shared/styles")],
  },
};

export default withNextIntl(nextConfig);
