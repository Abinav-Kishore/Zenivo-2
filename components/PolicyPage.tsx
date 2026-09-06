import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PolicyPageProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function PolicyPage({
  title,
  updated,
  children,
}: PolicyPageProps) {
  return (
    <>
      <Header />
      <main className="policy-page">
        <Link className="policy-back" href="/">
          &lt;- Back to zenivo
        </Link>
        <p className="eyebrow">zenivo policies</p>
        <h1>{title}</h1>
        <p className="policy-updated">Last updated: {updated}</p>
        <div className="policy-content">{children}</div>
      </main>
      <Footer />
    </>
  );
}
