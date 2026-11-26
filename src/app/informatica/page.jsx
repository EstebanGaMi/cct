import { CoursePage, cursoMetadata } from "../components/CoursePage";

export const metadata = cursoMetadata("informatica");

export default function Page() {
  return <CoursePage slug="informatica" />;
}
