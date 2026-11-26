import { CoursePage, cursoMetadata } from "../components/CoursePage";

export const metadata = cursoMetadata("soldadura");

export default function Page() {
  return <CoursePage slug="soldadura" />;
}
