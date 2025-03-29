import { Layout } from "@/components/Layout";

export const NotFoundView = () => {
  return (
    <Layout>
      <section className="min-h-[calc(100dvh-49px)] flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold mb-6">Page not found, instead you've found this gif lol</h1>
        <img src="confused-dog.gif" alt="confused dog" />
      </section>
    </Layout>
  );
};
