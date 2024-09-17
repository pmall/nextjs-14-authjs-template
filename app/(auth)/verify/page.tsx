export default function Verify(params: {
  searchParams: { email: string | undefined };
}) {
  const email = params.searchParams.email ?? "your email address.";

  return (
    <div className="max-w-96 mx-auto">
      <p className="text-center">A login email has been sent to {email}</p>
    </div>
  );
}
