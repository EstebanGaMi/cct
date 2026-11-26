import { CoursePage, cursoMetadata } from "../components/CoursePage";

export const metadata = cursoMetadata("gas");

export default function Page() {
  return <CoursePage slug="gas" />;
}
