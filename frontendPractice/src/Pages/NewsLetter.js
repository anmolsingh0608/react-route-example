import NewsletterSignup from "../components/NewsletterSignup";

function NewsletterPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <NewsletterSignup />
    </div>
  );
}

export const NLAction = ({ request }) => {
  console.log(request);
  return {};
};

export default NewsletterPage;
