import NewsletterSignup from "../components/NewsletterSignup";

function NewsletterPage() {
  return (
    <div style={{textAlign: "center", marginTop: "5%"}}>
      <NewsletterSignup />
    </div>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
