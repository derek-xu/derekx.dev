import Header from "@/components/header";
import { Container } from "@/components/container";
import Footer from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col w-full h-full max-w-xl mx-auto justify-start flex-1 px-4 md:px-0">
        <Header />
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
