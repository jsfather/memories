import SearchForm from '@/app/components/SearchForm';

export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Share your memories</h1>
        <p className="sub-heading !max-w-3xl">Submit your memory</p>
        <SearchForm />
      </section>
    </>
  );
}
