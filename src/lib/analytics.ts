import { useEffect } from 'react';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Inicializar Google Analytics
export const initGA = () => {
    if (!GA_MEASUREMENT_ID) {
        console.warn('Google Analytics ID não configurado');
        return;
    }

    // Carregar script do Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializar dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
    });
};

// Hook para rastrear pageviews
export const usePageTracking = () => {
    useEffect(() => {
        if (GA_MEASUREMENT_ID && window.gtag) {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: window.location.pathname,
            });
        }
    }, []);
};

// Rastrear eventos personalizados
export const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
) => {
    if (GA_MEASUREMENT_ID && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Eventos específicos
export const trackWhatsAppClick = (source: string) => {
    trackEvent('click', 'WhatsApp', source);
};

export const trackFormSubmit = (formName: string) => {
    trackEvent('submit', 'Form', formName);
};

export const trackServiceClick = (serviceName: string) => {
    trackEvent('click', 'Service', serviceName);
};
