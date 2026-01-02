import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Erro capturado pelo ErrorBoundary:", error, errorInfo);

        // Aqui você pode enviar o erro para um serviço de logging como Sentry
        // Sentry.captureException(error, { extra: errorInfo });
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.href = "/";
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-background px-4">
                    <div className="max-w-md w-full text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
                                <AlertTriangle className="w-10 h-10 text-destructive" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold">Ops! Algo deu errado</h1>
                            <p className="text-muted-foreground">
                                Encontramos um erro inesperado. Nossa equipe foi notificada e já está trabalhando para resolver.
                            </p>
                        </div>

                        {process.env.NODE_ENV === "development" && this.state.error && (
                            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 text-left">
                                <p className="text-sm font-mono text-destructive">
                                    {this.state.error.toString()}
                                </p>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button onClick={this.handleReset} variant="default">
                                Voltar para Home
                            </Button>
                            <Button onClick={() => window.location.reload()} variant="outline">
                                Tentar Novamente
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground">
                            Se o problema persistir, entre em contato conosco pelo{" "}
                            <a
                                href="https://wa.me/5562995513691"
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp
                            </a>
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
