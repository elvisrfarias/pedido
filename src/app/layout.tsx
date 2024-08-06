import './globals.css';
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: 'Não vale dizer não',
  description: 'Brincadeira do botão fujão, para pedido de oração',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
