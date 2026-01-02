import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    keywords?: string;
    noIndex?: boolean;
}

const SEO = ({
    title = "WinClick - Agência Digital | Criação de Sites, Landing Pages e E-commerce em Goiânia",
    description = "Agência digital em Goiânia especializada em criação de sites institucionais, landing pages e e-commerces. Design estratégico, SEO otimizado e foco em conversão.",
    canonical,
    ogImage = "https://winclick.com.br/og-image.png",
    ogType = "website",
    keywords = "agência digital goiânia, criação de sites, desenvolvimento web, landing page, e-commerce, loja virtual, site institucional, design web, marketing digital, SEO",
    noIndex = false,
}: SEOProps) => {
    const siteUrl = "https://winclick.com.br";
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow" />
            )}
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullCanonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};

export default SEO;
