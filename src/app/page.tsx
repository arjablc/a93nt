import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default async function Home() {
  return (
    <>
      <Button variant={"secondary"}>Hello</Button>
      <div className={cn()}>Hello a93nt</div>

      <Card className="m-8 p-16 flex justify-self-center h-50 w-50">
        Hello this is a card
      </Card>
    </>
  );
}
