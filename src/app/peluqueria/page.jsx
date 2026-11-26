import { CoursePage, cursoMetadata } from "../components/CoursePage";

export const metadata = cursoMetadata("peluqueria");

export default function Page() {
  return <CoursePage slug="peluqueria" />;
}
