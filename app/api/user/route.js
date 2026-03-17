import { getLoggedInUser } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
// he dependencies solved by the server
export async function GET() {
  await connectDB();
  const user = await getLoggedInUser();
  if (user instanceof Response) {
    return user;
  }
  return Response.json(user);
}
