import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/config";

export default function Home() {
  redirect(`/${defaultLocale}`);
}
