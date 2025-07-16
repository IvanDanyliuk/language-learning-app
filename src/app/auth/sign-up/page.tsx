import { SignUpForm } from "./ui/SignUpForm";

export default function NewAccountPage() {
  return (
    <div className="text-center flex flex-col min-h-screen sm:pt-52 md:pt-10">
      <h1 className="text-4xl font-bold text-gray-400">Welcome to</h1>
      <h1 className="text-6xl mb-5 font-bold text-gray-500">LangMate</h1>

      <SignUpForm />
    </div>
  );
}
