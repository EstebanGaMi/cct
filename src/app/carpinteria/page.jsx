import { CoursePage, cursoMetadata } from "../components/CoursePage";

export const metadata = cursoMetadata("carpinteria");

export default function Page() {
  return <CoursePage slug="carpinteria" />;
}
